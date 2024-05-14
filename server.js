const express=require("express")
const app=express()
const PORT=3000
const Petrouter=require("./routes/PetRouter")
app.use(express.json())

app.use("/",Petrouter)
app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`)
})
