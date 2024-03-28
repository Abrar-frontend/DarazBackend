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
    medicalSupplies,
    MobileArray,
    MobileHuawei,
    MobileIphone,
    MobileOnePlus,
    randomArr
} = require('./Products.js')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   console.log(req.query.id)
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
    }else if(req.query.id == 'Samsung Galaxy S21'){
        res.send(MobileArray)
    }else if(req.query.id == 'iPhone 13'){
        res.send(MobileIphone)
    }else if(req.query.id == 'OnePlus 9'){
        res.send(MobileOnePlus)
    }else if(req.query.id == 'Huawei P40'){
        res.send(MobileHuawei)
    }else{
        res.send(randomArr)
    }
})




app.listen(3000, () => console.log('Server ready'))