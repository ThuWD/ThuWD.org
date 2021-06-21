import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Start from './Components/Start'
import Main from './Components/Main'
import Particles from 'react-particles-js'
import { SHA256 } from 'crypto-js'
import Bg from './Components/Bg.js';
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
    <div className={styles.App}>
        <Bg/>
        <div className={SHA256(rand().toString().toString())} style={{width: '100vw', height: '100vh'}}>
            <div className={num} style={{width: '100%', height: '100%'}}>
              <Start/>

              <Particles width='100vw' height='100vh' className={styles.particles} params={{
                "particles": {
                  "number": {
                      "value": 100,
                      "density": {
                          "enable": true,
                          "value_area": 1500
                      }
                  },
                  "line_linked": {
                      "enable": true,
                      "opacity": 0.02
                  },
                  "move": {
                      "direction": "up",
                      "speed": 0.5
                  },
                  "size": {
                      "value": 1.5
                  },
                  "opacity": {
                      "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.05
                      }
                  }
              },
              "interactivity": {
                  "events": {
                      "onclick": {
                          "enable": true,
                          "mode": "push"
                      }
                  },
                  "modes": {
                      "push": {
                          "particles_nb": 1
                      }
                  }
              },
              "retina_detect": true
              }}/>
            </div>
        {main? <Main /> : <></>}
        </div>
    </div>
    </Router>
  );
}

export default App;
