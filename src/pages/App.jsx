import "./App.css"
import Navbar from "../components/Navbar"
import Newsletter from '../components/Newsletter/index';




function App() {
  

  return (
    <div className="App">
     
     <Navbar img={"./images/logo.png"} />
     <Newsletter placeholder={"Insira seu email"} email={Newsletter.email} img={"./images/mail.png"}   />
     
    </div>
  )
}

export default App
