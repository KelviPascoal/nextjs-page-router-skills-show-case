"use server";

import { pokeApi } from "@/constant/env";

export async function getPokemon() {
  try {
    const res = await fetch(`${pokeApi}?limit=9`);
    const data = (await res.json()) as any;

    return data;
  } catch (error) {
    console.error("Erro ao buscar pokémons:", error);
  } finally {
    return { results: [] };
  }
}
