import profile_icon from '../assets/profile.svg'

function Navbar() {
    return (
        <div className=" w-full h-30 text-xl font-baloo font-bold text-[#A1A1A1] flex justify-between " >
            <div className=' flex flex-1 space-x-15 items-center px-15' >
                <p className="text-6xl font-extrabold text-[#948979] " >Typer</p>
                <p className="text-white" >Book</p>
                <p>Mode</p>
                <p>Import</p>
            </div>

            <div className='w-[30%] flex justify-end items-center px-[10%]'>
                <img src={profile_icon} alt="" />
            </div>

        </div>
    )
}

export default Navbar