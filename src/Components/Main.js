import React from 'react'
import styles from './Main.module.css'
import typing from './Typing.gif'

const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.main}>
                <section>
                    <div className={styles.typing}>
                        <img src={typing}/>
                    </div>
                    <div className={styles.header}>
                    Let me tell you a little bit about myself!
                    </div>
                    <div style={{width: '80vw', height: '2px', display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                        <div style={{ backgroundColor: 'black', height: '100%', width: '100%', margin: 'auto'}}></div>
                    </div>
                    <div className={styles.bio}>
                        <span>My name is ThuWD, I am a self taught programmer in Javascript, c++ and c#. I am also an osu! player.</span>
                    </div>
                </section>

            </div>
            
        </div>
    )
}

export default Main
