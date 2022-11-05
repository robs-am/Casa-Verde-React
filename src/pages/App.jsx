
import Homepage from "./Homepage/Homepage";


import { GlobalStyle } from './../components/GlobalStyle';
import SignupForm from './../components/Form/Form2';





function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Homepage/>
      <SignupForm placeholder={"Insira seu email"} />
      
    </div>
  );
}

export default App;
