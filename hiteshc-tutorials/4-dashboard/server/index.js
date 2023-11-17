import express from 'express';
import bodyParser from 'body-parser';
import mongoos from 'mongoose';
import cors from 'cors';
import dotnev from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managmentRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import mongoose from 'mongoose';


// CONFIGURATIONS

dotnev.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// ROUTES

app.use('/clients', clientRoutes);
app.use('/general', generalRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managmentRoutes);

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`));