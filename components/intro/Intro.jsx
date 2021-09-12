import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from "react"
 
export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, strings: ['Developer', 'Designer', 'Creator'], 
        typeSpeed: 100, backSpeed: 80, backDelay: 1500 })
    },[])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src='assets/cameron.png' alt=''/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>I'm</h2>
                    <h1>Cameron McDowell</h1>
                    <h3>Freelance <span ref={ textRef }></span></h3>
                </div>
                <a href="#portfolio"> 
                    <img src='assets/down.png' alt=''/>
                </a>
            </div>
        </div>
    )
}
