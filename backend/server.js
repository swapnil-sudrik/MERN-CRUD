const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 8000;


dotenv.config();


//connect db

mongoose.connect(
    process.env.DB_CONNECT,
)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log("connecting time error", err))
    
app.use(cors());

app.use(express.json());
//import product routes
const productRoutes = require('./routes/productRoutes');

//route middleware
app.use("/api/get-products", productRoutes)


app.listen(port, () => console.log(`server is started at ${port}`));