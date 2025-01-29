import {FaUser} from "react-icons/fa"
import { BsKeyFill } from "react-icons/bs";
import { BsAt } from "react-icons/bs";
import { BsBackspaceFill } from "react-icons/bs";
import "./Login.css"

const Register = ({setIsLogin}) => {
  return (
    <div className="container">
        <form action="">
            <h1>Registrar novo usuario</h1>
        

        <div className="input-field">
            <input type="text"
            placeholder="Nome"
            />
            <FaUser className="icon"/>
        </div>

        <div className="input-field">
            <input type="email"
            placeholder="E-mail"
            />
            <BsAt className="icon"/>
        </div>

        <div className="input-field">
            <input type="password"
            placeholder="Senha"
            />
            <BsKeyFill className="icon"/>
        </div>

        <button>Cadastrar</button>

        <div className="signup-link">
            <p><BsBackspaceFill/> <a href="#" onClick={()=>setIsLogin(false)}> Voltar </a></p>
        </div>

        </form>
    </div>
  )
}

export default Register