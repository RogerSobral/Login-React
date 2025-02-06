


import './Card.css'

 const Card=({card})=> {

  
  return (
    <div className="container_card">
      <div className="icon_card" style={{color: card.color}}>{card.icon}</div>
      <div className="body_card">
        
            <p className="card_value">{card.value}</p>
            <h3 className="descript_card">{card.descript}</h3>
      </div>
    </div>
  );
}



export default Card