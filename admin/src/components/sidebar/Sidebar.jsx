import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top"><span className="logo">Aspire Space Admin</span></div>
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonIcon className='icon'/>
                    <span>User</span>
                </li>
                <li>
                    <LogoutIcon className = 'icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color</div>
    </div>
  )
}

export default Sidebar