import "./cadastro.css";

export default function Cadastro() {
  return (
    <main className="cadastro-page">
      <section className="cadastro-card">
        <h1>Crie sua Identidade de Herói</h1>
        <p>O primeiro passo de sua jornada épica.</p>

        <form>
          <label>Nome Completo</label>
          <input type="text" placeholder="Seu nome heroico" />

          <label>E-mail Arcano</label>
          <input type="email" placeholder="pergaminho@magia.com" />

          <label>Escolha sua Senha</label>
          <input type="password" placeholder="••••••••" />

          <button type="submit">⚔️ Iniciar Aventura</button>
        </form>

        <div className="social">
          <p>Ou forje alianças mágicas:</p>
          <div>
            <button>Google</button>
            <button>GitHub</button>
          </div>
        </div>

        <p className="login">
          Já possui um grimório? <a href="#">Retornar à Guilda</a>
        </p>
      </section>
    </main>
  );
}