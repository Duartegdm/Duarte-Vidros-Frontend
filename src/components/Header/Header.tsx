// src/components/Header.jsx
export default function Header() {
  return (
    <header style={{ padding: "20px", background: "#004d99", color: "#fff" }}>
      <h1>Duarte Vidros</h1>
      <nav>
        <a href="#home" style={{ margin: "0 10px", color: "#fff" }}>Home</a>
        <a href="#galeria" style={{ margin: "0 10px", color: "#fff" }}>Galeria</a>
        <a href="#contato" style={{ margin: "0 10px", color: "#fff" }}>Contato</a>
      </nav>
    </header>
  );
}
