import React from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchIcon/>
        </div>
        <div className="items"></div>
      </div>
    </div>
  )
}

export default Navbar
