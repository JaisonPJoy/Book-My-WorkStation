import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import React, { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import "./reserve.css";
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';

const Reserve = ({setOpen, officeId}) => {
    const [selectedResources, setSelectedResources] = useState([]);
    const {data, loading, error} = useFetch(`/offices/resources/${officeId}`);
    const {dates} = useContext(SearchContext);
    
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        
        return dates;
    };
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (resourceNumber) => {
        const isFound = resourceNumber.unavailableDates.some((date)=> alldates.includes(new Date(date).getTime()));
        return !isFound
    };


    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedResources(
            checked 
            ? [...selectedResources, value]
            : selectedResources.filter((item)=> item !== value)
        );
    }

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedResources.map((resourceId)=>{
                const res = axios.put(`/resources/availability/${resourceId}`, 
                {dates:alldates
                });
                return res.data;
        })
            
            );
        } catch (error) {

        }
    };

  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={()=> setOpen(false)} />
            <span>Select your seat:</span>
            {data.map((item) => {
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        {item.resourcesNumbers.map((resourceNumber) => {
                            <div className="room">
                                <label>{resourceNumber.number}</label>
                                <input type="checkbox" value={resourceNumber._id} onChange={handleSelect} disabled={!isAvailable(resourceNumber)} />
                            </div>
                        })}
                    </div>
                </div>
            })}
            <button onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve
