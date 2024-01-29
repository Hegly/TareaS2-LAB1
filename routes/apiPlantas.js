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

planta.post('', async (req,res)=>{

    const { nombre, tipo } = req.body;

    const params = [nombre, tipo];

    const sql = `insert into tbl_planta
                (nombre, tipo)
                values
                ($1, $2) returning * `

    const result = await db.query(sql, params);

    res.json(result);
})

export { planta }
