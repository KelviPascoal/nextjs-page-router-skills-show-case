import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== "Bearer valid-token") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.status(200).json({
    name: "Kelvi Pascoal",
    email: "kelvi@example.com",
  });
}
