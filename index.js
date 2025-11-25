const express = require('express');
const app = express();
const cors = require ('cors');

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/clientes', cors(),(req, res)=>{
  res.send('hola')
});

app.get('/alumnos', (req, res) => {
  console.log(req.query);
  res.send('Hello Worlld!');
});

app.get('/docentes/:control', (req, res) => {
  console.log(req.params);
  res.send('Hello World!');
});

app.post('/directivos', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});