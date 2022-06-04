import React from 'react'
import "../../styles/hotels/featured.css"
import img1 from "../../assets/images/cards/img-1.jpg"

const Featured = () => {
  return (
    <div className="featured">
       <div className="featuredItem">
           <img src={img1} alt=""  className="featuredImg" />
           <div className="featuredTitles">
               <h1>Dublin</h1>
               <h2>123 Properties</h2>

           </div>
       </div>
       <div className="featuredItem">
           <img src={img1} alt=""  className="featuredImg" />
           <div className="featuredTitles">
               <h1>Dublin</h1>
               <h2>123 Properties</h2>

           </div>
       </div>
       <div className="featuredItem">
           <img src={img1} alt="" className="featuredImg" />
           <div className="featuredTitles">
               <h1>Dublin</h1>
               <h2>123 Properties</h2>

           </div>
       </div>
    </div>
  )
}

export default Featured