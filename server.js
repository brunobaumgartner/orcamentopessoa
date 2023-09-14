const express = require('express');

let server = express();
const port = 3000;

server.use('/', (req, res)=>{
    res.send('ok')
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })