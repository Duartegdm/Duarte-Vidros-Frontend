// src/components/Banner.tsx
import React from "react";

const Banner: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: "url('/src/assets/banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    padding: "120px 20px",
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "80px 20px",
    borderRadius: "12px",
    display: "inline-block",
  };

  return (
    <section id="home" style={bannerStyle}>
      <div style={overlayStyle}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Duarte Vidros
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Especialistas em vidros temperados, sacadas e espelhos sob medida.
        </p>
      </div>
    </section>
  );
};

export default Banner;
