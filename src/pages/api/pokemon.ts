// /pages/api/pokemons.ts
import { pokeApi } from "@/constant/env";
import type { NextApiRequest, NextApiResponse } from "next";

type Pokemon = {
  name: string;
  url: string;
};

type PokeApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokeApiResponse | { message: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch(`${pokeApi}?limit=9`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data from PokéAPI");
    }

    const data: PokeApiResponse = await response.json();
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
}
