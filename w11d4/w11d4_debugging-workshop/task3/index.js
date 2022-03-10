import express from 'express'

import { getUsers } from './handlers.js'
import { logReqBody } from './utils.js'

const app = express()
const PORT = 3001

app.use(logReqBody)
app.use('/users', getUsers)

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})
