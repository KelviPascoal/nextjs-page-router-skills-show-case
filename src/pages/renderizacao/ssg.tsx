import { GetStaticProps } from "next";

interface SSGProps {
  geradoEm: string;
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  return {
    props: {
      geradoEm: new Date().toISOString(),
    },
  };
};

export default function SSG({ geradoEm }: SSGProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>SSG - Static Site Generation</h1>
      <p>Página gerada no build:</p>
      <strong>{geradoEm}</strong>
    </div>
  );
}
