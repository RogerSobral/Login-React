import React from 'react';
import './Header.css';

import {FaCog}from "react-icons/fa";

const Header = () => {
  return (
    <div className='container_header'>
        <h1 className='title'>Dashboard</h1>
   
     
       <input type="date" name="" id="" />
     
     
      <select className='month_selector'>
        <option value="">Selecione o mês</option>
        <option value="janeiro">Janeiro</option>
        <option value="fevereiro">Fevereiro</option>
        <option value="marco">Março</option>
        <option value="abril">Abril</option>
        <option value="maio">Maio</option>
        <option value="junho">Junho</option>
        <option value="julho">Julho</option>
        <option value="agosto">Agosto</option>
        <option value="setembro">Setembro</option>
        <option value="outubro">Outubro</option>
        <option value="novembro">Novembro</option>
        <option value="dezembro">Dezembro</option>
      </select>
      
      <div><FaCog/></div>
    </div>
  );
}

export default Header;
