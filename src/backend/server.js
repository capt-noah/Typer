const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get('/books', async (req, res) => {
    const data = await fetch("https://gutendex.com/books?limit=10")
    const info = await data.json()

    res.json(info)

    
})

app.listen(PORT, () => console.log("Listening...."))