import React from 'react'
import './Input.css'
import {FaUser} from "react-icons/fa"

const Input = ({type,placeholder,setValue, value,children}) => {
  return (
            <div className="input-field" >
                <input 
                type={type}
                placeholder={placeholder}
                onChange={(e)=>{setValue(e.target.value)}}
                value={value}
                />
                {children}
            </div>


  )
}

export default Input