require('dotenv').config()
const express = require('express')
const app = express();
const ConnectDb = require('./db/conn')
const userRouter = require('./routes/userRoute')
const cors = require('cors')
const port = process.env.PORT || 8000;
const path = require('path')

const __dirname = path.resolve();

app.use(cors())
app.use(express.json())
app.use("/attire/",userRouter)


app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})


const start=async()=>{

    try {
        await ConnectDb(process.env.MONOGO_URL)
        app.listen(port,()=>{
            console.log(`port is runing at ${port}`)
        })
    } catch (error) {
        
    }
}
start()