import { useState, useEffect } from "react"
import Logic from './components/logic.jsx'
import Navbar from './components/navbar.jsx'
import Controls from "./components/controls.jsx"
import Stats from "./components/stats.jsx"

function App() {

  let text = "The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well."
  // || Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next.First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book - shelves; here and there she saw maps and pictures hung upon pegs.She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.
  const orignalText = text.split('')
  const [inputText, setInputText] = useState("");
  const [current, setCurrent] = useState("")
  const [wpm, setWpm] = useState(0)
  const [acc, setAcc] = useState(0)
  const [timer, setTimer] = useState(60)
  const [reset, setReset] = useState(false)




  return (

    <div className=" w-full h-full ">

      <Navbar />

      <Controls timer={timer} setTimer={setTimer} />
      

      <Logic orignalText={orignalText} inputText={inputText} setInputText={setInputText} setCurrent={setCurrent} setWpm={setWpm} setAcc={setAcc} setTimer={setTimer} reset={reset} setReset={setReset} />
         
 
        
      <Stats timer={timer} wpm={wpm} acc={acc} setReset={setReset} />

      


      
    </div>


  )
}

export default App