
import {FaChalkboard,}from "react-icons/fa";

import './Card.css'
 const PercentageCard=({card})=> {
  return (
    <div className="container_card">
      <div className="icon_card">{card.icon}</div>
      <div className="body_card">
        
            <p className="card_value">{card.value}</p>
            <h3 className="descript_card">{card.descript}</h3>
      </div>
    </div>
  );
}

export default PercentageCard