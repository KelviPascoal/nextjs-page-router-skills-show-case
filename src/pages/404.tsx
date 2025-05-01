import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center" as const,
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>

      <Image src="/hate-this.gif" alt="Error image" width={300} height={300} />

      <p style={{ marginTop: "2rem" }}>
        <Link
          href="/"
          style={{ color: "#0070f3", textDecoration: "underline" }}
        >
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  );
}
