import Navbar from "./pages/Navbar"
import "./App.css"
import Newsletter from './pages/Newsletter/index';




function App() {
  

  return (
    <div className="App">
     
     <Navbar />
     <Newsletter placeholder={"Insira seu email"} email={Newsletter.email}  />
     
    </div>
  )
}

export default App
