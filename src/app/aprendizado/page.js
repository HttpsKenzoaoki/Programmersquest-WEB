import "./aprendizado.css";

export default function Aprendizado() {
  return (
    <main className="aprendizado-page">
      <section className="aprendizado-container">
        <header className="aprendizado-header">
          <div>
            <h1>📖 Área de Aprendizado</h1>
            <p>Veja tudo que você já aprendeu e os próximos conteúdos da sua jornada.</p>
          </div>

          <a href="/dashboard">← Voltar ao Dashboard</a>
        </header>

        <section className="resumo-grid">
          <div className="resumo-card">
            <h3>✅ Conteúdos concluídos</h3>
            <strong>4</strong>
            <p>Lógica, HTML, CSS e Variáveis</p>
          </div>

          <div className="resumo-card">
            <h3>⏳ Em andamento</h3>
            <strong>1</strong>
            <p>Loops de repetição</p>
          </div>

          <div className="resumo-card">
            <h3>🔒 Bloqueados</h3>
            <strong>3</strong>
            <p>Condicionais, Funções e Arrays</p>
          </div>
        </section>

        <section className="trilha">
          <h2>🧭 Trilha de Conhecimento</h2>

          <div className="modulos">
            <div className="modulo completo">
              <span>✅</span>
              <div>
                <h3>Lógica de Programação</h3>
                <p>Você aprendeu o que é algoritmo, sequência de passos e resolução de problemas.</p>
              </div>
              <button>Revisar</button>
            </div>

            <div className="modulo completo">
              <span>✅</span>
              <div>
                <h3>HTML Básico</h3>
                <p>Você aprendeu a criar estrutura de páginas usando títulos, textos, imagens e links.</p>
              </div>
              <button>Revisar</button>
            </div>

            <div className="modulo completo">
              <span>✅</span>
              <div>
                <h3>CSS Básico</h3>
                <p>Você aprendeu a estilizar páginas com cores, fontes, espaçamentos e layouts simples.</p>
              </div>
              <button>Revisar</button>
            </div>

            <div className="modulo completo">
              <span>✅</span>
              <div>
                <h3>Variáveis</h3>
                <p>Você aprendeu a guardar dados como nome, vida, pontuação e nível do personagem.</p>
              </div>
              <button>Revisar</button>
            </div>

            <div className="modulo atual">
              <span>🔁</span>
              <div>
                <h3>Loops de Repetição</h3>
                <p>Você está aprendendo como repetir comandos usando for e while.</p>
              </div>
              <button>Continuar</button>
            </div>

            <div className="modulo bloqueado">
              <span>🔒</span>
              <div>
                <h3>Condicionais</h3>
                <p>Use if e else para tomar decisões dentro do código.</p>
              </div>
              <button>Bloqueado</button>
            </div>

            <div className="modulo bloqueado">
              <span>🔒</span>
              <div>
                <h3>Funções</h3>
                <p>Aprenda a organizar comandos em blocos reutilizáveis.</p>
              </div>
              <button>Bloqueado</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}