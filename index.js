const express = require('express')
const app = express()
const cors = require('cors')

const {
    makeupProducts,
    skinCareProducts,
    hairCare,
    bathAndBody,
    mensCare,
    personalCare,
    beautyTools, 
    medicalSupplies
} = require('./Products.js')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   
    if(req.query.id == 'Makeup'){
    res.send(makeupProducts)
    }else if(req.query.id == 'Skin Care'){
        res.send(skinCareProducts)
    }else if(req.query.id == 'Beauty Tools'){
        res.send(beautyTools)
    }else if(req.query.id == 'Hair Care'){
        res.send(hairCare)
    }else if(req.query.id == 'Bath & Body'){
        res.send(bathAndBody)
    }else if(req.query.id == `Men's Care`){
        res.send(mensCare)
    }else if(req.query.id == 'Personal Care'){
        res.send( personalCare)
    }else if(req.query.id == 'Medical Supplies'){
        res.send(medicalSupplies)
    }else if(req.query.id == 'Fragrances'){
        res.send(medicalSupplies)
    }else{
        res.json('else condition is working now')
    }
})




app.listen(3000, () => console.log('Server ready'))