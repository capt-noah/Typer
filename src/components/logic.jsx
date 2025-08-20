import { useState } from 'react'
import Paragraph from './paragraph.jsx'

function Logic({ orignalText, inputText, setInputText, setCurrent, setWpm, setAcc }) {

    const [start, setStart] = useState(0)
    const [word, setWord] = useState(0)
    const [notCorrect, setNotCorrect] = useState(0)



    function checkInput(e) {

        const current = e.target.value
        setCurrent(current)
        setInputText(current)

        let size = current.length
        let startTime = 0
        let wordTemp = word

        if (size == 1)
            if (orignalText[size - 1] == current[size - 1]) {
                startTime = Math.floor((Date.now() / 1000))
                setStart(startTime)
            }

        if (orignalText[size - 1] != current[size - 1]) {
            let err = notCorrect
            err++
            setNotCorrect(err)

        }

        

        if (current[size - 1] == " " && size > 1) {
            wordTemp++
            setWord(wordTemp)

            let time = Math.floor((Date.now() / 1000))

            let elapsed = ((time - start) / 60)
            let WPM = Number((wordTemp / elapsed).toFixed(2))
            setWpm(WPM)

            let totalTyped = inputText.length
            let corr = totalTyped - notCorrect;
            let accuracy = ((corr / totalTyped) * 100).toFixed(1)

            setAcc(accuracy)


        }

        


    
    }
    


    return (
        <>
            <textarea className=" w-full h-full text-transparent caret-transparent absolute focus:outline-0 " value={inputText} onChange={(e) => checkInput(e)}></textarea>

            <p>

                {

                    orignalText.map((char, index) => {

                        let cur = inputText
                        let lastIndex = cur.length - 1

                        let color = "text-gray-500"
                        
                        if (cur[index] === char) color = "text-white"
                        if (cur[index] && (cur[index] !== char)) color = char == " " ? "bg-red-500" : "text-red-500"
                        
                        if (index == lastIndex + 1) color = "bg-green-200"
                        
                        if(char == '|') return (<br />)
                    
                        return ( <span key={index} className={`${color}` }>{char}</span> )
                    
                    })
                }

            </p>

            

        </>
    )
}

export default Logic