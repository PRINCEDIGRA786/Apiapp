const connectToMongo = require('./db')
connectToMongo();

//NOw express:

const axios = require('axios')
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(cors({
    origin: 'https://apiapp-frontend.vercel.app'
}));
app.use(express.json())//let the use of req.body

app.use('/api/auth', require('./routes/auth'));
app.use('/api/api', require('./routes/api'));
// app.use('/api/folio', require('./routes/portfolio'))
app.use('/', (req, res) => {
    res.json({ "mesaage": "connected to server" });
})
app.listen(port, () => {
    console.log(`Apiapp backend listening at the ${port}`);
})








