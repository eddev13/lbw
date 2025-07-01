import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Link {
  id: number;
  name: string;
  whatsapp: string;
  username: string;
  createAt: string;
}

export function LinkList() {
  const [links, setLinks] = useState<Link[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/link")
  //     .then((res) => res.json())
  //     .then((data) => setLinks(data.data))
  //     .catch((err) => console.error("Erro ao buscar links:", err));
  // }, []);

  useEffect(() => {
    async function fetchLink() {
      const response = await fetch("http://localhost:3000/api/link");
      const data = await response.json();

      if (response.ok) {
        setLinks(data.data);
      }
    }
    fetchLink();
  }, []);

  return (
    <>
      <title>LBW - Listagem de Links</title>

      <nav>
        <Link to="/">Cadastro</Link> | <Link to="/links">Listar Links</Link>
      </nav>
      <div>
        <h1>Links cadastrados</h1>
        <ul>
          {links.map((data) => (
            <li key={data.id}>
              <strong>{data.name}</strong> – @{data.username}
              <br />
              <a
                href={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir link
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
