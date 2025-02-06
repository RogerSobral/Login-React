// Importando os icons
import {FaUser,FaLock} from "react-icons/fa"

// Manipulando Dados da tela
import { useState } from "react"

// Importar styles
import "./Login.css"
import Input from "../Input";


const Login = ({setIsLogin,setRegister}) => {

        const [username,setUsername]=useState("");
        const [password,setPassoword]=useState("");

   

        const handleSubmit=(e)=>{
            e.preventDefault();
            if ("carlos@gmail.com"==username &&password==="1"){
              setIsLogin(true)
              alert("Enviando os dados: "+ username+" - "+ password);
            }
            
    
        }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>

            
              <Input 
              type={"email"} 
              placeholder={"E-mail"} 
              setValue={setUsername} 
              value={username}
              >
                  <FaUser className="icon"/>
              </Input>
           
              <Input 
              type={"password"} 
              placeholder={"Senha"} 
              setValue={setPassoword} 
              value={password}
              >
                  <FaLock className="icon"/>
              </Input>
      

          <div className="recall-forget">
            <label >
                <input type="checkbox" />
                Lembre de mim
            </label>

            <a href="#">Esqueceu a senha?</a>
          </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>Não tem uma conta? <a href="#" onClick={()=>{setRegister(false)}}>Registrar</a></p>
        </div>

        </form>

    </div>
  )
}

export default Login

// Instalando icones no projeto
// npm i @react-icons/all-files react-icons