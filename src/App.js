import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Start from './Components/Start'
import Main from './Components/Main'
import Particles from './Components/Particles'
import { SHA256 } from 'crypto-js'
import { useState } from 'react'


const rand = () => {
  return Math.floor(Math.random() * 10000000000000); 
}
let num = SHA256(rand().toString());
console.log(num.toString())


const App = () => {
  const [main, setmain] = useState(false)
  setTimeout(()=>{setmain(true)}, 8000);
  
  return (
    <Router>
    <div className="App">
    <div className={SHA256(rand().toString().toString())} style={{width: '100vw', height: '100vh'}}>
      <div className={num} style={{width: '100%', height: '100%'}}>
      <Start/>

      <Particles />
      </div>
    {main ? <Main /> : <></>}
    </div>
    </div>
    </Router>
  );
}

export default App;
