import {db} from '../db/conn.js'

const getPlanta = async (req,res)=>{

    const sql = `select * from tbl_planta order by id`
    const result = await db.query(sql);
 
    res.json(result)
 
 }

 const postPlanta = async (req,res)=>{

    const { nombre, tipo } = req.body;

    const params = [nombre, tipo];

    const sql = `insert into tbl_planta
                (nombre, tipo)
                values
                ($1, $2) returning * `

    const result = await db.query(sql, params);

    res.json(result);
}

const putPlanta = async (req, res)=>{

    const { nombre, tipo } = req.body
    const {id} = req.params

    const params = [
        nombre,
        tipo,
        id
    ]

    const sql = `update tbl_planta
                set
                    nombre = $1,
                    tipo = $2
                where id = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);
} 

const deletePlanta = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_planta where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getPlanta, postPlanta, putPlanta, deletePlanta}