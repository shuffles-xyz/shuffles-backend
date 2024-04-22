import prisma from "../lib/prims-client";

async function getUser(address:string) {
  
    try {
       const user = await prisma.user.findFirst({
          where: {
             address: {
                contains: address as string
             }
          }
       });
 
       return user;
      
    } catch (error) {
       console.error(error);
       
    }
 }

    export default getUser;