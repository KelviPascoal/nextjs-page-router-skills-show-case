import { origamidApi } from "@/constant/env";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("🚀 ~ req:", req.body);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, password } = req.body;

  try {
    const response = await fetch(origamidApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    console.log("🚀 ~ response:", response.body);

    if (!response.ok) {
      const errorData = await response.json();
      return res
        .status(response.status)
        .json({ message: errorData.message || "Erro externo" });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
