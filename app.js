const express = require('express')
const app = express()

app.listen(8000)
app.use(express.json())

app.get('/denemetest', (req,res) => {
  res.end('Başarılı bu veri biryerlerden geldi')
})

app.post('/denemetest', (req,res) => {
  console.log(req.body.deneme)
  res.end()
})