import { app } from './api/app'
import * as dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT_API, () => {
  console.log('aplicaćão iniciada')
})
