import React from 'react'
import Featured from '../../components/hotel/Featured'
import Header from '../../components/hotel/Header'
import "../../styles/hotels/home.css"

const HomeH = () => {
  return (
    <div>
        <Header/>
        <div className="homecontainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
        </div>
   </div>
  )
}

export default HomeH