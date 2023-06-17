// backend
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/results',(req,res)=>{
    var ta = Number(req.body.TA_input)
    var t = Number(req.body.T_input)
    var n = Number(req.body.N_input)

    var tawp = ta + ta*(t/100)
    var tpp = (tawp-ta)/n
    var app = tawp/n
    
    
    console.log(`Tip Per Person ${tpp.toFixed(2)}, Amount per person ${app.toFixed(2)} ,Total amount with tip ${tawp.toFixed(2)}`)

    const values={
        "tpp" : tpp.toFixed(2),
        "app" : app.toFixed(2),
        "tawp" : tawp.toFixed(2)
    }
    res.status(200).json(values)
})

app.listen('1515',()=>{
    console.log("Server is listening at port 1515")
})