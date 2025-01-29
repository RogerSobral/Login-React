
import './App.css'
import Login from './components/login/Login'
import Register from './components/login/Register'
import { useState } from 'react'


function App() {

  const [isLogin, setIsLogin]=useState(false)

  return (
    <div className="App">

      
      {isLogin ?<Register setIsLogin={setIsLogin}/>:  <Login setIsLogin={setIsLogin} />   }
     
    </div>

  )
}

export default App
