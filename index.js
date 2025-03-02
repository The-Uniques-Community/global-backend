import express from 'express';
// import { register } from "./controller/registerController.js";
import dbConnect from './config/dbConfig.js';
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);



