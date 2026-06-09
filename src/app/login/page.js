import "./login.css";

export default function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Acesse seu Grimório</h1>
        <p>O caminho para sua jornada épica começa aqui.</p>

        <form>
          <label>Nome Completo</label>
          <input type="text" placeholder="Seu nome heroico" />

          <label>E-mail Arcano</label>
          <input type="email" placeholder="pergaminho@magia.com" />

          <label>Coloque sua Senha</label>
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

        <p className="recuperalogin">
          Esqueceu sua senha? <a href="login/recuperar-senha">Retornar ao Grimório</a>
        </p>

        <p className="login">
          Não possui um grimório? <a href="cadastro">Retornar ao Cadastro</a>
        </p>
      </section>
    </main>
  );
}