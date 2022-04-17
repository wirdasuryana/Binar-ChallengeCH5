const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('indexch3')
})

app.get('/game', (req, res) =>{
  res.render('indexch4')
})

app.listen(4000, () =>{
  console.log('server is running...')
})
