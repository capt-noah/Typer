import { useEffect, useState } from 'react'
import divider_icon from '../assets/divider.svg'

function Controls( { timer, setTimer } ) {

    let colorOptions = [15, 30, 60, 120]


    function changeTimerOption(e) {

        let newTimer = Number(e.target.id)
        setTimer(newTimer)
        
    }

    return (
        
        <div className='w-full h-12 flex justify-center'>
            <div className=" w-[55%] h-full text-lg rounded-xl font-roboto text-[#A1A1A1] bg-[#393E46] flex justify-between px-10 items-center" >

                <div className=" w-[30%] flex justify-between" >
                    <p className=" text-[#DFD0B8] " >punctuation</p>
                    <p>numbers</p>
                </div>

                <img src={divider_icon} alt="" className='h-8' />

                <div className=" flex w-[15%] justify-between">
                    <p className=" text-[#DFD0B8] " >words</p>
                    <p>time</p>
                </div>

                <img src={divider_icon} alt="" className='h-8' />

                <div className=" w-[30%] flex justify-between " >

                    {
                        colorOptions.map((color) => {
                            return <p id={color} className={` ${ timer == color? 'text-[#DFD0B8]' : 'text-[#A1A1A1]' } cursor-pointer`} onClick={(e) => changeTimerOption(e)} >{color}</p>
                        })
                    }

                </div>
            </div>

        </div>

    )
}

export default Controls