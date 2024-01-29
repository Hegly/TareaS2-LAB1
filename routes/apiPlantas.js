import express from 'express'
const planta = express();
import {db} from '../db/conn.js'

let plantas = [{
    nombre : "manzanilla",
    tipo : "medicinal"
},
{
    nombre : "ortencia",
    tipo : "ornamental"
}
]

planta.get('', async (req,res)=>{

   const sql = `select * from tbl_planta`
   const result = await db.query(sql);

   res.json(result)

})

planta.post('', (req,res)=>{



})

export { planta }
