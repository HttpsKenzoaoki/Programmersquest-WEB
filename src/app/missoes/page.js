import "./missoes.css";

export default function Missoes() {
  return (
    <main className="missoes-page">
      <aside className="sidebar">
        <h1>Programmer's Quest</h1>

        <div className="perfil">
          <div className="avatar">🧙‍♂️</div>
          <div>
            <h2>Level 14</h2>
            <p>Mana: 450/500</p>
          </div>
        </div>

        <nav>
          <a href="/dashboard">🏠 Início</a>
          <a href="/missoes" className="active">🗺️ Missões</a>
          <a href="/aprendizado">📖 Aprendizado</a>
          <a href="/inventario">🎒 Inventário</a>
          <a href="/ranking">🏆 Ranking</a>
          <a href="/configuracoes">⚙️ Configurações</a>
        </nav>
      </aside>

      <section className="content">
        <header className="map-header">
          <h1>🗺️ Reino da Programação</h1>
          <p>
            Complete as fases para desbloquear novos conteúdos e evoluir no jogo.
          </p>

          <div className="progress-area">
            <span>3/8 missões concluídas</span>
            <div className="progress-bar">
              <div></div>
            </div>
          </div>
        </header>

        <section className="mapa">
          <div className="linha linha1"></div>
          <div className="linha linha2"></div>
          <div className="linha linha3 bloqueada-linha"></div>
          <div className="linha linha4 bloqueada-linha"></div>
          <div className="linha linha5 bloqueada-linha"></div>

          <div className="fase fase1 concluida">
            <button>✅</button>
            <h3>Primeiro Código</h3>
            <p>Lógica básica</p>
          </div>

          <div className="fase fase2 concluida">
            <button>🌳</button>
            <h3>Variáveis</h3>
            <p>Guardar valores</p>
          </div>

          <div className="fase fase3 atual">
            <button>🔁</button>
            <h3>Loops</h3>
            <p>Repetições</p>
          </div>

          <div className="fase fase4 bloqueada">
            <button>🔒</button>
            <h3>Condicionais</h3>
            <p>If e else</p>
          </div>

          <div className="fase fase5 bloqueada">
            <button>🔒</button>
            <h3>Funções</h3>
            <p>Blocos reutilizáveis</p>
          </div>

          <div className="fase fase6 bloqueada boss">
            <button>🏰</button>
            <h3>Boss: Desafio Final</h3>
            <p>Projeto completo</p>
          </div>
        </section>
      </section>
    </main>
  );
}