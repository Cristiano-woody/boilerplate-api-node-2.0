import { app } from './api/app'
import * as dotenv from 'dotenv'

dotenv.config()

const portServer = process.env.PORT_API

app.listen(process.env.PORT_API, () => {
  console.log(`\n Aplicação iniciada na porta: ${portServer as string} `)
})
