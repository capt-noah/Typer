import Image from '/moby.jpg'

function Book() {

    let chaptersList = [{chapter: 1, page: 33},{chapter: 2, page: 19},{chapter: 3, page: 24},{chapter: 4, page: 29},{chapter: 5, page: 17},{chapter: 6, page: 41},{chapter: 7, page: 25},{chapter: 8, page: 11},{chapter: 9, page: 37},{chapter: 10, page: 15}]

    return (
        <div className="w-full h-170 font-roboto flex px-30 justify-between" >
            
            <div className="w-50 h-80 bg-amber-400 bg-cover bg-center rounded-xl mt-15" style={{backgroundImage: `url(${Image})`}} >

            </div>

            <div className='w-150 mt-15 space-y-5 flex flex-col text-white relative' >
                <h1 className='w-[60%] h-fit text-5xl' >Moby Dick Or The Whale</h1>
                
                <div className='absolute right-0 w-60 flex justify-around' >
                    <div className='bg-[#948979] w-25 h-full flex justify-around items-center p-2 rounded-4xl' >
                        <p>wmp</p>
                        <p className='font-sans font-bold text-2xl'>32</p>
                    </div>
                    <div className='bg-[#948979] w-25 h-full flex justify-around items-center p-2 rounded-4xl' >
                        <p>acc</p>
                        <p className='font-sans font-bold text-2xl'>98</p>
                    </div>
                </div>

                <div className='relative flex items-center space-x-3' >
                    <div className='w-[70%] h-1 bg-[#747474] rounded-sm' >
                        <div className='w-[70%] h-1 bg-[#FFFFFF] rounded-sm' ></div>
                    </div>
                    <p className='font-sans font-extralight text-sm'>70% complete</p>
                </div>
                <p className='text-[#e1e1e1] ' >Moby Dick; Or, The Whale" by Herman Melville is a novel written in the mid-19th century. The story follows Ishmael, a sailor on a whaling voyage, who seeks adventure and escape from his gloomy life on land. As he embarks on this journey, he becomes drawn into the complex world of whaling and is introduced to the ominous figure of Captain Ahab, whose obsession with a legendary white whale ultimately drives the narrative. </p>

                <div className='w-[70%] flex justify-between' >
                    <ul className='font-sans font-extralight flex flex-col gap-2 text-[#cccccc]' >
                        <li>Author:</li>
                        <li>Genre:</li>
                        <li>Released:</li>
                        <li>Language:</li>
                        <li>Credits:</li>
                    </ul>

                    <ul className='flex flex-col gap-2' >
                        <li>Melville, Herman</li>
                        <li>Fiction</li>
                        <li>July 1, 2001</li>
                        <li>English</li>
                        <li>Daniel Lazarus, Jonesey, and David Widger</li>
                    </ul>
                </div>


            </div>

            <div className='w-65 h-156 mt-5 rounded-2xl border-1 border-[#707070] text-white p-3 space-y-2 ' >
                <h1 className='text-3xl mb-3' >Chapters</h1>

                <div className='w-full h-138 overflow-y-scroll space-y-2' >
                    {
                        chaptersList.map((list) => {
                        return  <div className='w-full bg-[#3E434B] flex justify-between items-center px-2 py-3 rounded-lg cursor-pointer' > <p>Chapter { list.chapter }</p> <p className=' font-sans font-extralight text-xs text-[#cecece]' >{ list.page } Pages</p> </div>
                        })

                    }
                </div>


            </div>
            
        </div>
    )
}

export default Book