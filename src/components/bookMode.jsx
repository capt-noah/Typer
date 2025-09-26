import { useState, useEffect } from 'react'
import BookCard from './bookCard.jsx'

function BookMode() {

    const bookCardData = {
        title: 'Alice in Wonderland',
        author: 'Lewis Caroll',
        page: 115
    }

    const [books, setBooks] = useState()
    let loader = [bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData, bookCardData]

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("firstPage"))
        if (data) {
            console.log(data)
            setBooks(data)
        }
        else {
        async function getData() {
            console.log("fetching...")
            const res = await fetch("http://localhost:3000/books")
            const data = await res.json()

            localStorage.setItem("firstPage", JSON.stringify(data.results))

            setBooks(data.results)
        
            console.log(data.results)
        }

        getData()
        }



        
    }, [])


    return (
        <div className="w-full flex justify-start flex-wrap space-x-10 px-30 mb-10 mt-10">
            
            {
                books ?
                books.map((book) => {
                    return <BookCard key={book.id} title={book.title} author={book.authors?.[0]?.name || "unknown"} image={book.formats["image/jpeg"]} page={"115"} />
                })
                    :
                    loader.map((load, index) => {
                    return <BookCard key={index} style="animate-pulse border-1 border-[#4f4f4f]" />
                })

            }

        </div>
    )
    
}

export default BookMode