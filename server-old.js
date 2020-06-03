

const express = require('express')
const app = express();

app.use( express.static( __dirname + '/public' ) );
 
/* app.get('/', (req, res) => {
  //res.send('Hola Mundo')
  const salida = {
    nombre: 'fernando',
    edad: 42,
    url: req.url
    };
    res.send(salida);
})
 */
app.get('/data', (req, res) => {
    res.send('Hola Data');
  })
 
app.listen(3000, () => {
    console.log("Escuchando peticiones en puerto 3000");
})