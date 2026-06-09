import "../login.css";

export default function RecuperarSenha() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Recuperar Senha</h1>
        <p>Insira seu e-mail para recuperar sua senha.</p>

        <form>
          <label>E-mail Arcano</label>
          <input type="email" placeholder="pergaminho@magia.com" />

          <button type="submit">⚔️ Recuperar Senha</button>
        </form>

      </section>
    </main>
  );
}