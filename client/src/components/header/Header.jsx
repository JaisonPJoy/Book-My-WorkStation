import React from 'react';
import {useState, useContext} from 'react';
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot} from "@fortawesome/free-regular-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
export default function Header({type}) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        },
      ]);
      const navigate = useNavigate();
      const {user} = useContext(AuthContext);
      const {dispatch} = useContext(SearchContext);

      const handleSearch = () => {
        dispatch({type:"NEW_SEARCH", payload:{destination,date}})
        navigate("/campus", { state: { destination, date } });
      };
  return (
    <div className="header">
        <div className = {type == "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                    <span>Office</span>
                </div>

                <div className="headerListItem">
                    {/* <FontAwesomeIcon icon={faChair} /> */}
                    <span>Work Station</span>
                </div>

                <div className="headerListItem">
                    {/* <FontAwesomeIcon icon={faHandshake} /> */}
                    <span>Meeting Rooms</span>
                </div>

                <div className="headerListItem">
                    {/* <FontAwesomeIcon icon={screen-users} /> */}
                    <span>Scrum Rooms</span>
                </div>
            </div>
                { type !== "list" &&
                <><h1 className="headerTitle">Welcome to your space</h1>
                <p className="headerDesc">book your favorate space at your faverate office campus</p>
                <button className="headerButton">Get Started</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                        <input 
                        type = "text"
                        placeholder='location'
                        className='headerSearchInput' 
                        onChange={(e) => setDestination(e.target.value)} />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className = 'headerIcon' />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className = 'date'
                            minDate={new Date()}
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>

                </div> </>}
            </div>
    </div>
  )
}
