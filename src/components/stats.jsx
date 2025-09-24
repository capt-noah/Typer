
function Stats({ timer, wpm, acc, setReset }) {

    const reset = () => {
        setReset(true)
        console.log("Reseted")
    }

    return (
        <div className="w-full h-10 flex justify-center items-center text-2xl text-white font-roboto">
            <p className="text-6xl text-[#DFD0B8] absolute left-[10%]" >{timer}</p>
            <div className="w-150 flex justify-between items-center">
                <div className="w-20" >
                    <p>wpm</p>
                    <p className="text-6xl text-[#DFD0B8]" >{ wpm }</p>
                </div>

                <div className="w-50">
                    <p>acc</p>
                    <p className="text-6xl text-[#DFD0B8]" >{ acc }% </p>
                </div>

                <button className="w-25 h-10 z-1 rounded-xl text-lg font-baloo font-bold bg-[#DFD0B8] text-[#393E46] cursor-pointer active:scale-105" onClick={reset} >Retry</button>
            </div>

        </div>
    )
}

export default Stats