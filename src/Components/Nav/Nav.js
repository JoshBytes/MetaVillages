import React from 'react'
import './Nav.css';


function Nav() {
  
  return (
    <nav>
      <a className="navlinks" href="/Wallet"><li>Wallet Options</li></a>
        <a className="navlinks" href="/"><h1 className="heading">MetaVillages</h1></a>
        <ul className="navlinks">
        <a className="navlinks" href="/Roadmap"><li>View RoadMap</li></a>
        </ul>
    </nav>
  );
}

export default Nav;