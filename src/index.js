import 'dotenv/config';
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
}) 
