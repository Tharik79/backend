import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import route from './route/routes.js';
dotenv.config();

const app = express();
//const route = express.Router();

//const port = process.env.PORT || 9000; 
const PORT = 9000;
// const MONGO_URL = 'mongodb+srv://Tharik:welcome123@cluster0.ofjdk.mongodb.net/userTable?retryWrites=true&w=majority';
app.use(cors());
app.use(express.json());
app.use(express());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/users', route);

app.get('/',function (request, response)  {
    response.status(200).json('hello world');
})
app.listen(PORT,() => {
    console.log(`server is running sucessfully on port ${PORT}`);
})



mongoose.connect(process.env.MONGO_URL,)
.then(() => console.log("db is connected"))
.catch((err) => console.log(err));

    



// app.get('/', (request, response) => {
//     response.status(200).json('hello world');
// })
// app.listen(PORT,() => {
//     console.log(`server is running sucessfully on port ${PORT}`);
// })

//app.use('/users', route);

