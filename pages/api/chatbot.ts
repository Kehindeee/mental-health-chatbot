// pages/api/chatbot.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { message } = req.body;

  // Placeholder for actual chatbot logic
  res.status(200).json({ response: `Echo: ${message}` });
}
