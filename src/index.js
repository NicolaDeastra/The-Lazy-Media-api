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

app.get('*', (req, res) => {
  res.send({
    message: 'endpoint not found, visit link on bellow for documentation 👇',
    documentation: 'https://github.com/NicolaDonoastro/The-Lazy-Media-api',
  })
})

app.listen(port, () => {
  console.log(`Running away on ${port}`)
})
