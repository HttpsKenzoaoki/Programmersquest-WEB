import "./primeiro-codigo.css";

export default function PrimeiroCodigo() {
  return (
    <main className="aula-page">
      <section className="aula-container">
        <header className="aula-header">
          <div>
            <h1>✅ Primeiro Código</h1>
            <p>Aprenda os primeiros conceitos de programação jogando.</p>
          </div>

          <a href="/missoes">← Voltar ao mapa</a>
        </header>

        <section className="aula-grid">
          <div className="conteudo">
            <h2>📖 O que é programação?</h2>

            <p>
              Programar é dar instruções para o computador executar uma tarefa.
              É como escrever uma receita: você organiza os passos em uma ordem
              lógica.
            </p>

            <div className="exemplo">
              <h3>Exemplo simples:</h3>

              <pre>{`mostrar "Olá, aventureiro!"
guardar nome = "Maria"
mostrar nome`}</pre>
            </div>

            <h2>🧠 Conceito principal</h2>

            <p>
              Um programa é formado por comandos. Cada comando representa uma
              ação que o computador deve realizar.
            </p>

            <ul>
              <li>Mostrar uma mensagem</li>
              <li>Guardar uma informação</li>
              <li>Fazer uma conta</li>
              <li>Tomar uma decisão</li>
            </ul>
          </div>

          <aside className="jogo-card">
            <h2>🎮 Desafio da Missão</h2>
            <p>
              Complete o desafio para ganhar XP e liberar a próxima etapa.
            </p>

            <div className="pergunta">
              <h3>Qual comando representa melhor uma instrução?</h3>

              <button>A) Dormir até o computador funcionar</button>
              <button>B) Mostrar uma mensagem na tela</button>
              <button>C) Esperar a magia acontecer</button>
            </div>

            <button className="finalizar">Finalizar missão</button>
          </aside>
        </section>
      </section>
    </main>
  );
}