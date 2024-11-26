import express from "express";
import statusCheckRouter from "./routes/statusCheck"

const app = express()
app.use(express.json())

app.use("/status", statusCheckRouter)

const PORT = 3333
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})
