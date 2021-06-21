import React from 'react'
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.main}>
                <section>
                    <div className={styles.header}>
                    Let me tell you a little bit about myself!
                    </div>
                    <div style={{width: '80vw', height: '2px', display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                        <div style={{ backgroundColor: 'black', height: '100%', width: '100%', margin: 'auto'}}></div>
                    </div>
                    <div className={styles.bio}>
                        <span>I'm ThuWD, a student, programmer and osu! player. If you are interested in any of my games or projects or osu! info, then this the right place!</span>
                    </div>
                </section>

            </div>
            
        </div>
    )
}

export default Main
