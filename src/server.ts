import express from "express";
import 'reflect-metadata'
import { router } from "./presentation/routes";


const app = express()
app.use(express.json())

app.use(router)

app.listen(3333, () => {
    console.log("Server is running: http://localhost:3333  🚀");
    
})
