import React from 'react';
import "./featuredLocations.css"

const FeaturedLocations = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://i.pinimg.com/originals/6e/0e/ad/6e0ead31ba2a883bfb31c995c9830cbe.jpg" alt="kochi"  className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Kochi </h1>
            {/* <h2> 200 seats free</h2> */}
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://i.pinimg.com/originals/c9/5f/47/c95f4732737399d6407f2b02f4815c74.png" alt="chennai"  className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Chennai </h1>
            {/* <h2> 200 seats free</h2> */}
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://i.pinimg.com/originals/d7/0a/bb/d70abbcc25a8d355d767ec69e5fd057d.png" alt="hyderabad"  className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Hyderabad </h1>
            {/* <h2> 200 seats free</h2> */}
            </div>
        </div>  

        <div className="featuredItem">
            <img src="https://imgs.search.brave.com/opQXSf_bYAYPX2b4CuSALQocR_FoxW1opDHz2yNO5oM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2LzJi/LzMyLzE2MmIzMjQz/MjJkNjU3NTRiMDUz/M2YyMjE0NzMwZmE0/LmpwZw" alt="bangalore"  className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Bangalore </h1>
            {/* <h2> 200 seats free</h2> */}
            </div>
        </div>
    </div>
  )
}

export default FeaturedLocations