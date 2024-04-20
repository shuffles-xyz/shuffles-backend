
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import wallet from './routes/wallet';
import tokens from './routes/tokens';
import dln from './routes/dln';
import nodeCron from 'node-cron';
import { getTokenList } from "./utils/getTokenList";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;


app.use("/api/wallet", wallet);
app.use("/api/tokens", tokens);
app.use("/api/dln", dln);

const job = nodeCron.schedule("* * * * * *", async function jobYouNeedToExecute() {
    await getTokenList();
});

// job.start();
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
