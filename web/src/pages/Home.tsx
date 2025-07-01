import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, username }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          `Seu link foi criado! Acesse: http://localhost:5000/${data.data.username}`
        );
      } else {
        alert("Erro ao criar o link: " + JSON.stringify(data.error));
      }
    } catch (error) {
      alert("Erro inesperado.");
      console.error(error);
    }
  };

  return (
    <>
      <title>LBW - Link Bio WhatsApp</title>

      <nav>
        <Link to="/">Cadastro</Link> | <Link to="/links">Listar Links</Link>
      </nav>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            placeholder="Número do WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <br />

          <input
            placeholder="Nome de usuário (ex: eddev13)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          <button type="submit">Gerar Link</button>
        </form>
        {success && <p>{success}</p>}
      </div>
    </>
  );
}
