import React from 'react'
import { Link } from 'react-router-dom';
import "./searchItem.css";


const SearchItem = ({item}) => {
    return (
      <div className="searchItem">
        <img
          src="https://imgs.search.brave.com/4E3Pufwhwc-dyWCQdjtnoZCDZEKrYju3ZgB81XaIQrw/rs:fit:600:400:1/g:ce/aHR0cDovL2ljZG4u/aW1hZ2VzLnRvdXJp/c3RsaW5rLmNvbS9y/ZXBvc2l0b3J5L0FU/L0hVL0xZL0FJL05G/L09QL0FSL2luZm9w/YXJrLWF0aHVseWEt/X2luZm9wYXJrLV9r/b2NoaS5qcGc"
          alt="athulya"
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.city}</span>
          {/* <span className="siTaxiOp">Free airport taxi</span> */}
          <span className="siSubtitle">
            {/* Studio Apartment with Air conditioning */}
          </span>
          <span className="siFeatures">
            {/* Entire studio • 1 bathroom • 21m² 1 full bed */}
          </span>
          <span className="siCancelOp">Cancel any time </span>
          <span className="siCancelOpSubtitle">
            {/* You can cancel later, so lock in this great price today! */}
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Grate Place to Work</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            {/* <span className="siPrice">$112</span> */}
            {/* <span className="siTaxOp">Includes taxes and fees</span> */}
            <Link to = {`/campus/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };  

export default SearchItem
