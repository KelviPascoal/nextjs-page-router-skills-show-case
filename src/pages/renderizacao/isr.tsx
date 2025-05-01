import { GetStaticProps } from "next";

interface ISRProps {
  geradoEm: string;
}

// Incremental Static Regeneration (ISR)
export const getStaticProps: GetStaticProps<ISRProps> = async () => {
  return {
    props: {
      geradoEm: new Date().toISOString(),
    },
    revalidate: 10,
  };
};

export default function ISR({ geradoEm }: ISRProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ISR - Incremental Static Regeneration</h1>
      <p>Página gerada no build, mas revalidada a cada 10 segundos:</p>
      <strong>{geradoEm}</strong>
    </div>
  );
}
