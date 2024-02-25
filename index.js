const express = require('express')
const app = express()
const path = require("path")
//console.log(__dirname)

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

// app.get('/', function (req, res) {
//     console.log(req)
//   res.send('<h1>Top Page</h1>')
// })

app.post("/api/v1/quiz",function (req, res){
  const answer = req.body.answer
  if(answer === "2"){
    res.redirect("/correct.html")
  }
    else{
    res.redirect("/incorrect.html")
  }
  res.send(answer)

})

app.get('/about', function (req, res) {
    res.send('Hello World')
  })
app.listen(3000,function(){
    console.log("Running")
})