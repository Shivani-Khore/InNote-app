const connecttoMongo = require('./db'); // This loads the db.js file from the same folder
const express = require('express')
const cors = require('cors') 
connecttoMongo(); // This connects to MongoDB


const app = express()
const port = 5000
app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})

