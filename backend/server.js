import express from "express";
import mongoose from "mongoose"
import userRouter from "./models/routers/userRouter.js";
import userProduct from "./models/routers/productRouter.js";

const app = express();
mongoose.connect(process.env.MONGODB_UR || 'mongodb://localhost/amazon', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});



app.use('/api/users/', userRouter);
app.use('/api/products/', userProduct);

app.get('/', (req, res) => {
res.send('server is ready');
});

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`);
});