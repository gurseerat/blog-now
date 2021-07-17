import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './routes';
import * as mongoose from "mongoose";
import config from '../config/config';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

let optionsMongo = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.connect(config.MONGO_DB.URL, optionsMongo, async (err) => { //Database Connection
    if (err) {
      console.log(err);
    } else {
      console.log("Database successfully connected");
    }
  });

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
