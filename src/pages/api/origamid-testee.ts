import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Você fez um GET!" });
  }

  if (req.method === "POST") {
    const { nome } = req.body;
    return res.status(200).json({ message: `Olá, ${nome}!` });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Método ${req.method} não permitido`);
}
