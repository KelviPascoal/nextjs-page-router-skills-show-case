"use client";
import { GetServerSideProps } from "next";

import React from "react";
import styles from "../PokemonCard.module.css";
import { pokeApi } from "@/constant/env";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
}

function PokemonCard({ id, name, image }: PokemonCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={name}
        className={styles.image}
        width={120}
        height={120}
      />
      <h2 className={styles.name}>
        {id}. {name}
      </h2>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { name } = context.query;
  const res = await fetch(`${pokeApi}/${name}`);
  const data = (await res.json()) as any;

  return { props: { pokemonData: data.forms } };
};

export default function PokemonPage(props: { pokemonData: any }) {
  const { pokemonData } = props;
  const { name } = useRouter().query;
  const [{ name: pokemonName }] = pokemonData;
  console.log("🚀 ~ PokemonPage ~ pokemon:", pokemonData);
  return (
    <>
      <Head>
        <title>{name} | Pokédex App</title>
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
        <h1>Pagina voltada para testar o middleware</h1>
        <h3>
          faremos uma chamada a api de pokemons e no meio desse trajeto iremos
          adicionar imagens a esses dados
        </h3>

        <section>
          <h2>{pokemonName}</h2>
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
            <PokemonCard
              key={pokemonName}
              id={pokemonName}
              image={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
              name={pokemonName}
            />
          </div>
        </section>
      </main>
    </>
  );
}
