// src/components/Contato.tsx

import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const Contato: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  const sectionStyle: React.CSSProperties = {
    background: "#f2f2f2",
    padding: "50px 20px",
    textAlign: "center",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonStyle: React.CSSProperties = {
    background: "#004d99",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <section id="contato" style={sectionStyle}>
      <h2>Entre em Contato</h2>
      <p>Solicite um orçamento ou tire suas dúvidas!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <br />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
          required
          style={inputStyle}
        ></textarea>
        <br />
        <button type="submit" style={buttonStyle}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contato;
