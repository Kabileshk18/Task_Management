const dotenv = require('dotenv')
const path = require('path')
const app = require(path.join(__dirname,'src','app.js'))

dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Server connected Successfully "+PORT)
})