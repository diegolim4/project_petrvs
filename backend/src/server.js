const express = require('express')
const app = express()

const Ifos = require('./models/Info')

const bodyParser = require('body-parser')
const Info = require('./models/Info')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next)=>{
    res.send()
})

app.post('/',(req, res)=>{
    Info.create({
        city: req.body.city,
        circuit: req.body.circuit,
        date: req.body.date,
        hour: req.body.hour
    }).then(()=>console.log('Informações adicionada')
    ).catch((erro)=>console.log('O erro foi ' +erro))
})

const port = 3100
app.listen(port,()=> console.log('rodando no http://localhost:'+port))

