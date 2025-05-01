import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("/api/user", {
      headers: {
        Authorization: "Bearer valid-token",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data: User) => setUser(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p>Erro: {error}</p>;
  if (!user) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Perfil</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
