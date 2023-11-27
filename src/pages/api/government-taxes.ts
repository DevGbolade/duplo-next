import Taxes from "../../models/Taxes";
import db from "../../utils/db";

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
      // Handle GET request
      await db.connect();
      const trx = await Taxes.find();
    //   const trx = await newTrx.
    res.status(200).json({ message: 'Data received!', data: trx });
  } else if (req.method === 'POST') {
    await db.connect();
      const newTrx = await new Taxes({
        ...req.body,
      });
      const trx = await newTrx.save();
    res.status(201).json({ message: 'Data received!', data: trx });
  } else {
    // Handle other methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}
