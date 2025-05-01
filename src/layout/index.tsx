import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/login-origamid">Login Origamid</Link>
          <Link href="/pokemon">Pokemons</Link>
          <Link href="/renderizacao/ssr">SSR</Link>
          <Link href="/renderizacao/isr">ISR</Link>
          <Link href="/renderizacao/ssg">SSG</Link>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "1rem",
};

const navStyle = {
  display: "flex",
  gap: "1rem",
};
