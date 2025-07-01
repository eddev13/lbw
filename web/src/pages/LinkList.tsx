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

  useEffect(() => {
    fetch("http://localhost:3000/api/link")
      .then((res) => res.json())
      .then((data) => setLinks(data.data))
      .catch((err) => console.error("Erro ao buscar links:", err));
  }, []);

  return (
    <>
      <nav>
        <Link to="/">Cadastro</Link> | <Link to="/links">Listar Links</Link>
      </nav>
      <div>
        <h1>Links cadastrados</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <strong>{link.name}</strong> – @{link.username}
              <br />
              <a
                href={`https://wa.me/${link.whatsapp}`}
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
