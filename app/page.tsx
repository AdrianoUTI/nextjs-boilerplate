export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Adrios</h1>
      <p>Ferramenta pessoal de apoio clínico</p>

      <textarea
        placeholder="Cole os exames aqui..."
        rows={10}
        style={{ width: "100%", marginTop: 20 }}
      />

      <br /><br />

      <button>Processar exames</button>
    </div>
  );
}
