import { Request, Response } from "express";
import prisma from "../../lib/prims-client";

async function createBridge(req: Request, res: Response) {
  const { 
    src_address,
    dst_address,
    src_chain,
    dst_chain,
    src_token,
    dst_token,
    src_amount,
    dst_amount,
    tx_hash,
    route,
    address } = req.body;
  try {
    const bridge = await prisma.bridge.create({
      data: {
        src_address,
        dst_address,
        src_chain,
        dst_chain,
        src_token,
        dst_token,
        src_amount,
        dst_amount,
        tx_hash,
        route,
        address,
      },
    });
    res.status(200).json(bridge);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

async function getBridgeTx(req: Request, res: Response) {
  const { tx } = req.params;
  try {
    const bridge = await prisma.bridge.findUnique({
      where: {
        tx_hash: tx,
      },
    });
    res.status(200).json(bridge);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

async function getAllTransactions(req: Request, res: Response) {
  const { address } = req.params;
  try {
    const bridge = await prisma.bridge.findMany({
      where: {
        address,
        },
        });
    res.status(200).json(bridge);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export { createBridge, getBridgeTx, getAllTransactions };