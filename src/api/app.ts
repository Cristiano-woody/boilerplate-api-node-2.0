import express from 'express'
import cors from 'cors'
import { routes } from '..'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.use(cors())

export { app }
