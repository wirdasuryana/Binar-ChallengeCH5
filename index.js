const express = require('express');
const app = express()
const posts = require('./db/posts.json')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.get('/login', (req, res) =>{
  res.status(200).send(posts)
  console.log('data is taken');
})

// app.post('/api/v1/posts', (req, res) =>{
//   const {division} = req.division

//   const user = posts[posts.length - 1].user + 1
//   const post = {user, division}

//   posts.push(post)

//   res.status(200).send(post)
// })

app.get('/login', (req, res) =>{
  console.log('login succeed');
  res.render('login')
})

app.post('/ogin', (req, res) =>{
  const{division, age, address} = req.body

  user.push({
    division,
    age,
    address
  })
  res.redirect('/')
})

app.get('/api/v1/posts/:user', (req, res) =>{
  const post = posts.find(i => i.user == req.params.user)
  res.status(200).send(post)
})

app.listen(5000, () =>{
  console.log('server is running');
})