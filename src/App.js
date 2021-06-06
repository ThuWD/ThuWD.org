import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Start from './Components/Start'
import Main from './Components/Main'
import Particles from './Components/Particles'
import { SHA512 } from 'crypto-js'


function App() {
  return (
    <Router>
    <div className="App">
      <>
      <Start/>

      <Particles />
      </>
    <Main />
    </div>
    </Router>
  );
}

export default App;
