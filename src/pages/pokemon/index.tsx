import { GetServerSideProps } from "next";

import React from "react";
import styles from "./PokemonCard.module.css";
import { pokeApi } from "@/constant/env";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export interface PokemonCardProps {
  id: string;
  name: string;
  image: string;
}

export type Pokemon = {
  name: string;
  url: string;
};
export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={name}
        className={styles.image}
        width={120}
        height={120}
      />
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${pokeApi}?limit=9`);
  const data = (await res.json()) as PokemonListResponse;
  return { props: { results: data.results } };
};

export default function PokemonsPage(props: { results: Pokemon[] }) {
  const { results } = props;
  return (
    <>
      <Head>
        <title>Pokémon | Pokédex App</title>
        <meta
          name="description"
          content="Explore a Pokédex com informações completas dos Pokémon."
        />
        <meta
          name="keywords"
          content="pokédex, pokémon, pokemons, tipos de pokemon, habilidades"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <h3>
          faremos uma chamada a api de pokemons e no meio desse trajeto iremos
          adicionar imagens a esses dados
        </h3>

        <section>
          <h1>Pokemons</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              width: "800px",
              margin: "0 auto",
            }}
          >
            {results.map((pokemon) => (
              <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                <PokemonCard
                  id={pokemon.name}
                  image={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                  name={pokemon.name}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
