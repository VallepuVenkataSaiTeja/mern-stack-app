const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser")

require('./database')

const userRouter = require('./routes/user-route')

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://zany-waffle-5ggxw9r5xpq9hv9rx-5173.app.github.dev'],
    methods:  ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/users', userRouter)

app.get('/', (req, res) =>{
    res.send('Hello!')
})

app.listen(5000, ()=>{
    console.log('server running')
});