import './App.css';

function App() {
  const user = {
    name: "João Silva",
    whatsapp: "11999999999",
    links: [
      { title: "Meu site", url: "https://meusite.com" },
      { title: "Instagram", url: "https://instagram.com" }
    ]
  };

  return (
    <>
    <title>LBW - Link Bio WhatsApp</title>
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem", textAlign: "center" }}>
      <img
        src="https://via.placeholder.com/100"
        alt="Foto de perfil"
        style={{ borderRadius: "50%", marginBottom: "1rem" }}
      />
      <h1>{user.name}</h1>
      <a
        href={`https://wa.me/${user.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          margin: "1rem 0",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Fale comigo no WhatsApp
      </a>
      <div>
        {user.links.map((link, index) => (
          <div key={index} style={{ margin: "0.5rem 0" }}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "0.75rem",
                backgroundColor: "#eee",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500"
              }}
            >
              {link.title}
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
