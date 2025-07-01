import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface LinkData {
  name: string;
  whatsapp: string;
  username: string;
}

export function LinkPreview() {
  const { username } = useParams();
  const [linkData, setLinkData] = useState<LinkData | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLink() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/link/${username}`
        );
        const data = await response.json();

        console.log(response)
        console.log(data)

        if (response.ok) {
          setLinkData(data.data);
        } else {
          setLinkData(null);
        }
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setLinkData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchLink();
  }, [username]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!linkData) {
    return <p>Usuário não encontrado</p>;
  }

  return (
    <>
      <h2>User Page {username}</h2>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>{linkData.name}</h1>
        <p>@{linkData.username}</p>
        <a
          href={`https://wa.me/${linkData.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Enviar mensagem no WhatsApp</button>
        </a>
      </div>
    </>
  );
}
