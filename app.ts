import "dotenv/config"
import express from "express"
import router from "./routes/router"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const PORT = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`🚀 App 🚀 running on port ${PORT}!`);
})