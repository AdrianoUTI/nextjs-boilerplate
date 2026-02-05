"use client";
import { useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [dados, setDados] = useState<{ nome: string; valor: string }[]>([]);

  function processar() {
    const linhas = texto.split("\n");

    const resultado = linhas
      .map((linha) => {
        const partes = linha.split(/[:\s]+/);
        if (partes.length >= 2) {
          return {
            nome: partes[0],
            valor: partes.slice(1).join(" "),
          };
        }
        return null;
      })
      .filter(Boolean) as { nome: string; valor: string }[];

    setDados(resultado);
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Adrios</h1>
      <p>Ferramenta pessoal de apoio clínico</p>

      <textarea
        placeholder="Cole os exames aqui..."
        rows={10}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ width: "100%", marginTop: 20 }}
      />

      <br /><br />

      <button onClick={processar}>Processar exames</button>

      {dados.length > 0 && (
        <table border={1} style={{ marginTop: 30, width: "100%" }}>
          <thead>
            <tr>
              <th>Exame</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, i) => (
              <tr key={i}>
                <td>{item.nome}</td>
                <td>{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
