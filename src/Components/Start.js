import React from 'react'
import styles from './Start.module.css'
import { useState } from 'react';
import Scroll from './scroll.svg'

    
const Start = () => {
    /*
    *       I know this is the worst way to implement this but I'm doing it anyway...
    *       * B R U H *
    *       -_-
    *       - Literally the only developer
    */
    const [StartText, setStartText] = useState('Hi')
    const [bruh, setbruh] = useState(false)
    setTimeout(()=>{setStartText('Welcome to my little corner of the Internet!')}, 4000)
    setTimeout(()=>{setbruh(true)}, 7500)
    return (
        <div className={styles.Start}>
            <header className={styles.hello}>
                {!bruh? ( <>{StartText}</> ) : (<>How may I help you today? <div className={styles.scroll}><p>Scroll down</p><img src={Scroll} width='70px' /><div></div></div></>) }
            </header>
        </div>
    )
}

export default Start;
