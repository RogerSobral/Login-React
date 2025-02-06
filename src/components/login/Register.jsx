import {FaUser} from "react-icons/fa"
import { BsKeyFill } from "react-icons/bs";
import { BsAt } from "react-icons/bs";
import { BsBackspaceFill } from "react-icons/bs";
import "./Login.css"
import Input from "../Input";

const Register = ({setRegister}) => {
  return (
    <div className="container">
        <form action="">
            <h1>Registrar novo usuario</h1>
        
            <Input 
              type={"text"} 
              placeholder={"Nome"} 
            //   setValue={setPassoword} 
            //   value={password}
              >
                  <FaUser className="icon"/>
              </Input>

              <Input 
              type={"email"} 
              placeholder={"E-mail"} 
            //   setValue={setPassoword} 
            //   value={password}
              >
                  <BsAt className="icon"/>
              </Input>

              <Input 
              type={"password"} 
              placeholder={"Senha"} 
            //   setValue={setPassoword} 
            //   value={password}
              >
                  <BsKeyFill className="icon"/>
              </Input>

              <Input 
              type={"password"} 
              placeholder={"Repetir Senha"} 
            //   setValue={setPassoword} 
            //   value={password}
              >
                  <BsKeyFill className="icon"/>
              </Input>

      
       

            <button>Cadastrar</button>

            <div className="signup-link">
                <p><BsBackspaceFill/> <a href="#" onClick={()=>setRegister(true)}> Voltar </a></p>
            </div>

        </form>
    </div>
  )
}

export default Register