import React from 'react'
import './Main.css'
import { useState } from 'react';
 

    
const Main = () => {
    const [StartText, setStartText] = useState('Hi')

    return (
        <div className="Main">
            <header className='hello' style={{}}>
                {StartText}
            </header>
        </div>
    )
}

export default Main
