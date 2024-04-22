import { Request, Response } from "express";
import prisma from "../../lib/prims-client";

async function createActivity(req: Request, res: Response) {
    const {
        address,
        activity_type,
        activity
    } = req.body;
    try {
        const activityRes = await prisma.activity.create({
            data: {
                address,
                activity_type,
                activity
            },
        });
        res.status(200).json(activityRes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

async function getActivity(req: Request, res: Response) {
    const { address } = req.body;
    try {
        const activityRes = await prisma.activity.findMany({
            where: {
                address,
            },
        });
        res.status(200).json(activityRes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export { createActivity, getActivity };