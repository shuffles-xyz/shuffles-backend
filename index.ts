
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import wallet from './routes/wallet';
import tokens from './routes/tokens';
import dln from './routes/dln';
import nodeCron from 'node-cron';
import { getTokenList } from "./utils/getTokenList";
import user from './routes/user';
import dca from './routes/dca';
import limit from './routes/limit';
import bridge from './routes/bridge';
import activity from './routes/activity';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.use("/api/wallet", wallet);
app.use("/api/tokens", tokens);
app.use("/api/dln", dln);
app.use("/api/user", user);
app.use("/api/dca", dca);
app.use("/api/limit", limit);
app.use("/api/bridge", bridge);
app.use("/api/activity", activity);

// nodeCron.schedule("* 23 * * * *", getTokenList);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
