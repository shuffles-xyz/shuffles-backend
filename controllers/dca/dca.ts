import { Request, Response } from 'express';
import prisma from '../../lib/prims-client';
import { createActivity } from '../activity/activity';
import { tryCatch } from 'bullmq';

async function createDCA(req: Request, res: Response) {
    const { address, dca_key, input_token, output_token, in_amount, out_amount, gasFees } = req.body;

    try {
        const dca = await prisma.dCA.create({
            data: {
                address,
                dca_key,
                input_token,
                output_token,
                in_amount,
                out_amount,
                gasFees
            }
        });
        
       try {
        const activityRes = await prisma.activity.create({
            data: {
                address,
                activity_type: 'DCA',
                activity: {
                    dca_key,
                    input_token,
                    output_token,
                    in_amount,
                    out_amount,
                    gasFees
                }
            },
        });
       } catch (error) {
        console.log(error);
       }
        res.status(200).json(dca);      

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getDCA(req: Request, res: Response) {
    const { dca_key } = req.body;

    try {
        const dca = await prisma.dCA.findFirst({
            where: {
                dca_key: {
                    contains: dca_key as string
                }
            }
        });

        res.status(200).json(dca);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllDCA(req: Request, res: Response) {
    const {address} = req.body;
    try {
        const dca = await prisma.dCA.findMany({
            where: {
                address: address as string
                }
                });

        res.status(200).json(dca);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export { createDCA, getDCA, getAllDCA };