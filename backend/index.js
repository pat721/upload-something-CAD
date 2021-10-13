const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 8080

var uploadsRoutes = require('./routes/uploads')

app.use(cors())

app.use(fileUpload())
app.use(express.static('public'));


app.use('/api', uploadsRoutes)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})