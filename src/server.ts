import express, { Application } from 'express'

const app:Application = express()

const PORT:number = 7000

app.listen(PORT,()=>{
    console.log(`server is running on http://localhoast${PORT} `)
})

