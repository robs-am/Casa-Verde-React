import Homepage from "./Homepage/Homepage";

import { GlobalStyle } from "./../components/GlobalStyle";

import Form from './../components/Form/Form';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Homepage />
      <Form />
    </div>
  );
}

export default App;
