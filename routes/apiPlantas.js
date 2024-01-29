import express from 'express'
const planta = express();

let plantas = [{
    nombre : "manzanilla",
    tipo : "medicinal"
},
{
    nombre : "ortencia",
    tipo : "ornamental"
}
]

planta.get('', (req,res)=>{

    res.json(plantas);

})

planta.post('', (req,res)=>{


    
})

export { planta }
