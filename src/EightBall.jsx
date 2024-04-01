import React, { useState } from 'react'
import './EightBall.css'
import answers from './Messages'

function EightBall() {
    const [answer, setAnswer] = useState(0)
    const [shake, setShake] = useState(null)
    const [fade, setFade] = useState(null)

    const getRando = function () {
        let rando = Math.floor(Math.random() * 20) + 1
        console.log(rando);
        return rando;
    }

    return (
        <>
            <div className={`outer-shell ${shake}`}>
                <div className={`inner-circle ${fade}`} style={{backgroundColor: answers[answer].color}}>
                    <p style={{color: 'white'}}>{answers[answer].msg}</p>
                </div>
            </div>
            <button onClick={() => {
                setAnswer(getRando());
                setShake(shake === "shake" ? null : "shake");
                setFade(fade === "fadeIn" ? null : "fadeIn");

                setTimeout(() => {setShake(null)}, 100);
                setTimeout(() => {setFade(null)}, 3000);
            }}> Shake! </button>
        </>
    )
}

export default EightBall