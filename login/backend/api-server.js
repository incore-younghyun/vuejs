const express = require('express')
const app = express()
const port = 3000
// const cors = require('cors')

// app.all('/*', function(req, res, next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

// app.use(cors())
// app.use(cors({origin:"http://localhost:8080"}))

app.get('/api/account', (req, res) => {
  res.send({
    mid:3,
    memberName:'홍길동',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})