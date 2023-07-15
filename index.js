const express = require('express')
const app = express()
const morgan = require('morgan')
const router = require('./router/index')
const path = require('path')
const cors = require('cors')
const port = 3001
const dotenv = require("dotenv")


dotenv.config()
// app.use(express.urlencoded())
app.use(morgan('combined'))
app.use(express.json())
app.use(cors({
    origin: "*"
}))


app.use(router);
app.use(express.static(path.join(__dirname, './data')))

app.get("/", (req,res) => {
    return res.status(200).json({message: "hello world"})
})

app.listen(port, () => {
    console.log("Server is listening on http://localhost:" + port)
})