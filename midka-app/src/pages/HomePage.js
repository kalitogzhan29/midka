import React from 'react'
import './HomePage.css'
import {Link} from "react-router-dom"

function HomePage() {
  return (<section>  
    <div className="home" >
      
      <div className="headerContainer">
        <h1> Twitter </h1>
        <p> Comunicate with everyone</p>
        <Link to="/consultation">
          <button> Contact us</button>
        </Link>
      </div>
      <img className="img"></img>
    </div>
    </section>
  );
}

export default HomePage;