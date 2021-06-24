import db from './db/connection.js'
import PostsRoutes from './routes/posts.js'

import express from 'express'
import cors from 'cors'
import logger from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

/// a way to define a api url and pass it to all of our routes

app.use('/api', PostsRoutes)

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () => console.log(`Express server application is running on port ${PORT}`))
})
