import express from 'express'
import cors from 'cors'
import { routes } from '..'

class App {
  readonly api: express.Application
  constructor () {
    this.api = express()
    this.api.use(express.json())
    this.api.use(express.urlencoded({ extended: true }))
    this.api.use(routes)
    this.api.use(cors())
  }
}

export default App
