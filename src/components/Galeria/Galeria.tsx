// src/components/Galeria.tsx
import React from "react";

interface Imagem {
  src: string;
  titulo: string;
}

const imagens: Imagem[] = [
  { src: "/src/assets/sacada.jpg", titulo: "Envidraçamento de Sacadas" },
  { src: "/src/assets/box.jpg", titulo: "Box de Banheiro" },
  { src: "/src/assets/espelho.jpg", titulo: "Espelhos Decorativos" },
  { src: "/src/assets/cobertura.jpg", titulo: "Coberturas de Vidro" },
];

const Galeria: React.FC = () => {
  const galeriaStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "40px",
  };

  const itemStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  return (
    <section id="galeria">
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Nossos Serviços</h2>
      <div style={galeriaStyle}>
        {imagens.map((img, index) => (
          <div key={index} style={itemStyle}>
            <img src={img.src} alt={img.titulo} style={imgStyle} />
            <p style={{ marginTop: "10px" }}>{img.titulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
