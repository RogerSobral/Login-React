import React, { useState } from 'react'
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaShoppingCart,
  FaThLarge,
  FaThList,
  FaUserAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Slidebar = ({children}) => {
  
  const[isOpen,setIsOpen]=useState(false);
  // Vai inverter a isOpen
  const toggle =()=>setIsOpen(!isOpen);
  
  const menuItem=[
  {
    path:"/",
    name:"Dashboard",
    icon:<FaThLarge/>
  },
  {
    path:"/product",
    name:"Product",
    icon:<FaShoppingBag/>
  },
  {
    path:"/productList",
    name:"Product List",
    icon:<FaThList/>
  },
  {
    path:"/listShopping",
    name:"List Shopping",
    icon:<FaShoppingCart/>
  },
  {
    path:"/friends",
    name:"Friends",
    icon:<FaCommentAlt/>
  },
  {
    path:"/analytics",
    name:"Analytics",
    icon:<FaRegChartBar/>
  },
  {
    path:"/about",
    name:"About",
    icon:<FaUserAlt/>
  },
]
  return (
    <div className='container_menu'> 
           <div  style={{width: isOpen ? "250px":"50px"}} className="sidebar" >

              <div className="top_section">

                <h1 style={{display: isOpen ? "block":"none"}}   className='logo'>Logo</h1>

                <div style={{marginLeft: isOpen ? "50px":"0"}}   className="bars">

                  <FaBars onClick={toggle}/>
                </div>
             
             
              </div>
              {/* Menu */}
              {menuItem.map((item,index)=>(
                <NavLink to={item.path} 
                key={index} 
                className="link" 
                activeclassName="active">

                  <div className="icon">{item.icon}</div>
                  <div style={{display: isOpen ? "block":"none"}}   className="link_text">{item.name}</div>
                </NavLink>
             ))}
           </div>
           <main>{children}</main>

    </div>
  );
}

export default Slidebar