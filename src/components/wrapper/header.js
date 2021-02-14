import React from "react";
import logo from './../../chart.gif';

//
function Header() {
    return (
        <div>
      <header>
      <img src={logo} id ="logo"/>
      <h1><a href="index.html">Skill Soft Weight Tracker</a></h1> 
      <nav>
          <ul>
              <li><a href = "index.html">home</a></li>
              <li><a href = "enterweight.html">Enter weight</a></li>
              <li><a href = "myweight.html">my weight</a></li>
              <li><a href = "teamweight.html">team weight</a></li>

              </ul>
              </nav>       
      </header>
    </div>
    )
}
;

export default Header;