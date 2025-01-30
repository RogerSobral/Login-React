import React from 'react'
import {
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaShoppingCart,
  FaThLarge,
  FaThList,
  FaUserAlt,
}from "react-icons/fa";


const Slidebar = () => {
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
           <h1>sei la</h1>

    </div>
  )
}

export default Slidebar