import pg from 'pg-promise'
const pgp = pg();
const cnstr = `postgresql://postgres:user@localhost:5432/api_invernadero`;
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexión Exitosa");
    } )

    .catch( (err)=>{
        console.log(`Error de conexión ${err}`)
    })

    export { db }