import { Request, Response } from 'express';
import prisma from '../../lib/prims-client';

async function createWithdrawal(req: Request, res: Response) {
   const { address, receiver, token, amount, tx_hash } = req.body;

   try {
      console.log(req.body);
      const [withdrawal] = await Promise.all([
         await prisma.withdrawal.create({
            data: {
               address,
               receiver,
               token,
               amount,
               tx_hash
            }
         }),
         await prisma.activity.create({
            data: {
               address: address,
               activity_type: 'WITHDRAW',
               activity: {
                  receiver,
                  token,
                  amount,
                  tx_hash
               }
            }
         })
      ])

      res.status(200).json(withdrawal);

   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}

export default createWithdrawal;