const app = require("./src/app")
require("dotenv").config()

app.listen(3000,()=>{
    console.log("Server is listinig on Port : 3000")
})