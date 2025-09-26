import { useEffect, useState } from 'react'
import profile_icon from '../assets/profile.svg'

function Navbar({ nav, setNav }) {

    const navbarOptions = ["Book", "Mode", "Import"]

    function handleNavClick(e) {
        let navbar = e.target.innerText
        setNav(navbar)
    }

    useEffect(() => {

    }, [])

    return (
        <div className=" w-full h-30 text-xl font-baloo font-bold text-[#A1A1A1] flex justify-between " >
            <div className=' flex flex-1 space-x-15 items-center px-15' >
                <p className="text-6xl font-extrabold text-[#948979] cursor-pointer" >Typer</p>
                {/* <p id='book' className="cursor-pointer" onClick={(e) => handleNavClick(e)} >Book</p>
                <p id='mode' className='cursor-pointer' >Mode</p>
                <p id='import' className='cursor-pointer' >Import</p> */}

                {
                    navbarOptions.map((option) => {
                        return <p className={` ${option == nav? 'text-white' : 'text-[#A1A1A1]' } cursor-pointer`} onClick={(e) => handleNavClick(e)} >{ option }</p>
                    })
                }
            </div>

            <div className='w-[30%] flex justify-end items-center px-[10%]'>
                <button className='cursor-pointer' >
                    <img src={profile_icon} alt="profile" />
                </button>
            </div>

        </div>
    )
}

export default Navbar