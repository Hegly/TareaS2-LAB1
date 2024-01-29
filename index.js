import express from 'express';
import { planta } from './routes/apiPlantas.js'
const app = express();
const port = 4000;

app.use('/api/plantas', planta);

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})
