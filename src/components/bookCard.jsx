

function BookCard({ title, author, pages, image, style }) {
    return (
        <div className={`w-50 h-70 bg-cover bg-no-repeat bg-center mt-10 rounded-2xl relative cursor-pointer flex items-end ${style} `} style={{backgroundImage: `url(${image})` }}>

            <div className="absolute w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl" ></div>

            <div className="w-full h-20 z-1 px-3 flex flex-col text-white text-lg font-bold font-baloo " >
                <p className=" truncate overflow-hidden whitespace-nowrap" >{ title }</p>
                <p className="whitespace-nowrap overflow-hidden truncate font-roboto font-normal text-xs" >{ author }</p>
                <p className="absolute right-5 bottom-2">{pages}</p>
            </div>

        </div>
    )
}

export default BookCard