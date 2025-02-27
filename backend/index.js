import express, { request } from "express" ;
import { PORT , mongodbURL} from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";
import booksRoutes from "./routes/booksRoutes.js"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//     origin:"http://localhost:3000",
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//     })
// );

app.get('/' , (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome to Mern stack tutorial')
});

app.use('/books' , booksRoutes);

mongoose
    .connect(mongodbURL)
    .then(() =>{
        console.log('App connected to database');
        app.listen(PORT ,() =>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) =>{
        console.log(error);
    });