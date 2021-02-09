import express from 'express'
import cors from 'cors'

import router from './router'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.use('/api', router)

app.get('/', (req, res) => {
  res.send({
    message: 'Hallo 👋',
    status: 'On Progress 🚀',
  })
})

app.listen(port, () => {
  console.log(`Running away on ${port}`)
})
