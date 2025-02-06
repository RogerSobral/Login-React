import {FaChalkboard,}from "react-icons/fa";
import '../css/Page.css'
import '../css/Dashboard.css'
import Card from '../components/Card'

import Header from "../components/Header";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";


const Dashboard = () => {
  const dataCards=[
    {icon:<FaChalkboard/>,
      value:12.5,
      descript:"Variação",
      color:"#22cfcf"
    },
    {icon:<FaChalkboard/>,
      value:560.60,
      descript:"Total mês",
      color:"#FFC534"
    },
    {icon:<FaChalkboard/>,
      value:5,
      descript:"Conexões",
      color:"#059bff"
    },
    {icon:<FaChalkboard/>,
      value:5,
      descript:"Fornecedores",
      color:"#9966FF"
    }


  ]

  return (
    <div className='page'> 
    
        <Header/>

        <div className="display_info"> 
            {dataCards.map((card, index)=>(
              <Card id={index} card={card}/>
            ))}
            
        </div>


        <div className="charts">
            <LineChart className="chart"/>
            <PieChart className="chart"/>

        </div>

        <div className="charts">
            <BarChart className="chart"/>
            <PieChart className="chart"/>

        </div>

      


    </div>
  )
}

export default Dashboard