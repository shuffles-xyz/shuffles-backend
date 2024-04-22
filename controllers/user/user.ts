import { Request, Response } from 'express';
import prisma from '../../lib/prims-client';
import getUser from '../../utils/getUser';

async function createUser(req: Request, res: Response) {
   console.log('createUser', req);
   const { address, deviceType } = req.body;

   try {
      if (!address || !deviceType) {
         return res.status(400).json({ error: 'Address and device type are required' });
      }

      const userExists = await getUser(address);

      if (userExists) {
         return res.status(400).json({ error: 'User already exists' });
      }

      const user = await prisma.user.create({
         data: {
            address,
            device_type: deviceType,
         }
      });

      res.status(200).json(user);

   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}

export default  createUser ;