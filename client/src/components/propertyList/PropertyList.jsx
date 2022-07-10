import React from 'react';
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className = "pList">
        <div className="pListItem">
            <img src="https://static.vecteezy.com/system/resources/previews/004/579/644/non_2x/online-meeting-via-group-call-people-on-computer-screen-speaking-with-colleague-or-friend-illustrations-concept-video-conference-online-meeting-or-work-from-home-illustration-in-flat-style-vector.jpg" alt="workstation" className="pListImage" />
            <div className="pListTitles">
                <h1> Work Stations</h1>
                {/* <h2>2003 available</h2> */}
            </div>
        </div>

        <div className="pListItem">
            <img src="https://imgs.search.brave.com/uGK1zs1CW17A_w6PiM_FzUFey4M75GMIL_4mxLainos/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzM3NTAy/MTMvc2NyZWVuc2hv/dHMvODM1MzkxNi9t/ZWRpYS80ZWIzYWM3/MWI0MWQ0ZmUxMWYw/YjJhZDgxYmY2M2Zk/OC5wbmc" alt="meeting" className="pListImage" />
            <div className="pListTitles">
                <h1> Meeting Rooms</h1>
                {/* <h2>2003 available</h2> */}
            </div>
        </div>

        <div className="pListItem">
            <img src="https://i.pinimg.com/originals/5f/29/25/5f29259aff401688a9ba3c9de82e5ae7.png" alt="scrum" className="pListImage" />
            <div className="pListTitles">
                <h1> Scrum Rooms</h1>
                {/* <h2>2003 available</h2> */}
            </div>
        </div>
    </div>
  )
}

export default PropertyList
