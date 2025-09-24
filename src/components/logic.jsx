import { useState, useEffect, useRef } from 'react'
import Paragraph from './paragraph.jsx'

function Logic({ orignalText, inputText, setInputText, setCurrent, setWpm, setAcc, setTimer, reset, setReset }) {

    const [start, setStart] = useState(0)
    const [word, setWord] = useState(0)
    const [notCorrect, setNotCorrect] = useState(0)
    const [canStart, setCanStart] = useState(false)
    const [finishedTimer, setFinishedTimer] = useState(false)

    const textRef = useRef(null)

    useEffect(() => {

        const handleClick = () => {
            if(textRef.current) textRef.current.focus()
        }
        
        window.addEventListener('keydown', handleClick)

        return () => window.removeEventListener('keydown', handleClick)

    }, [])


    function startGame() {
        setStart(0)
        setWord(0)
        setNotCorrect(0)
        setCanStart(false)
        setFinishedTimer(false)
        setReset(false)

        setInputText("")
        setCurrent("")
        setWpm(0)
        setAcc(0)
        setTimer(60)
    }

    useEffect(() => {
        startGame()
    }, [])

    useEffect(() => {
        if(reset) startGame()
    }, [reset])



    function checkInput(e) {

        const current = e.target.value
        setCurrent(current)
        setInputText(current)

        let size = current.length
        let startTime = 0
        let wordTemp = word

        if (size == 1) {
            startTime = Math.floor((Date.now() / 1000))
            setStart(startTime)
            setCanStart(true)
        }  

        if (orignalText[size - 1] != current[size - 1]) {
            let err = notCorrect
            err++
            setNotCorrect(err)

        }

        

        if ((current[size - 1] == " " && size > 1) && current[size - 1] == orignalText[size - 1]  ) {
            wordTemp++
            setWord(wordTemp)

            let time = Math.floor((Date.now() / 1000))
            let elapsed = ((time - start) / 60)

        if(elapsed > 0){
            let WPM = Number((wordTemp / elapsed).toFixed(0))
            setWpm(WPM)
        }
            let totalTyped = inputText.length
            let corr = totalTyped - notCorrect;
            let accuracy = ((corr / totalTyped) * 100).toFixed(0)

            setAcc(accuracy)


        }

        
    
    }

    useEffect(() => {

        if(!canStart) return

        const timer = setInterval(() => {
            setTimer(prev => {
                if (prev <= 0) {
                    clearInterval(timer)
                    setFinishedTimer(true)
                    return 0
                }
                return prev - 1
                
            })
        }, 1000)

        return () => clearInterval(timer)

    }, [canStart])
    


    return (


        <div className= {`w-full h-100 px-[10%] flex justify-center items-center ${finishedTimer? 'blur-[3px]' : ''}  `}  >
            <textarea className=" w-full h-full text-transparent caret-transparent absolute focus:outline-0 pointer-events-none" ref={textRef} disabled={finishedTimer} value={inputText} onChange={(e) => checkInput(e)}></textarea>

            <p className=' text-3xl font-mono font-semibold text-center' >

                {

                    orignalText.map((char, index) => {

                        let cur = inputText
                        let lastIndex = cur.length - 1

                        let color = "text-gray-500"
                        
                        if (cur[index] === char) color = "text-white"
                        if (cur[index] && (cur[index] !== char)) color = char == " " ? "bg-red-500" : "text-red-500"
                        if (index == lastIndex + 1 && !finishedTimer) color = "bg-green-200"                     
                        if(char == '|') return (<br />)
                    
                        return ( <span key={index} className={`${color}` }>{char}</span> )
                    
                    })
                }

            </p>

        </div>

    )
}

export default Logic