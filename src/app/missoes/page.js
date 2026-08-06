"use client";

import "./missoes.css";
import { useRouter } from "next/navigation";

export default function Missoes() {
  const router = useRouter();

  const fases = [
    { 
      id: 1, 
      titulo: "Lógica Básica", 
      subtitulo: "Primeiro Código", 
      icone: "💡", 
      status: "concluida",
      rota: "/trilhas/primeiro-codigo",
      cor: "#FFD700"
    },
    { 
      id: 2, 
      titulo: "Variáveis", 
      subtitulo: "Guardar Valores", 
      icone: "📦", 
      status: "concluida",
      rota: "/trilhas/variaveis",
      cor: "#4CAF50"
    },
    { 
      id: 3, 
      titulo: "Loops", 
      subtitulo: "Repetições", 
      icone: "🔄", 
      status: "atual",
      rota: "/trilhas/loops",
      cor: "#5d3fd3"
    },
    { 
      id: 4, 
      titulo: "Condicionais", 
      subtitulo: "If e Else", 
      icone: "🔀", 
      status: "bloqueada",
      rota: "/trilhas/condicionais",
      cor: "#666"
    },
    { 
      id: 5, 
      titulo: "Funções", 
      subtitulo: "Blocos Reutilizáveis", 
      icone: "🧩", 
      status: "bloqueada",
      rota: "/trilhas/funcoes",
      cor: "#666"
    },
    { 
      id: 6, 
      titulo: "Desafio Final", 
      subtitulo: "Boss da Jornada", 
      icone: "👑", 
      status: "bloqueada", 
      boss: true,
      rota: "/trilhas/desafio-final",
      cor: "#FF4444"
    },
  ];

  const handleFaseClick = (fase) => {
    if (fase.status === "bloqueada") {
      alert(`🔒 Esta fase ainda está bloqueada! Complete as fases anteriores para desbloqueá-la.`);
      return;
    }
    router.push(fase.rota);
  };

  return (
    <main className="missoes-page">
      <aside className="sidebar">
        <h1>🧙 Programmer's Quest</h1>

        <div className="perfil">
          <div className="avatar">🧙‍♂️</div>
          <div>
            <h2>Level 14</h2>
            <p>⚡ Mana: 450/500</p>
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
          <p>⚔️ Complete as fases para desbloquear novos conteúdos e evoluir no jogo!</p>

          <div className="progress-area">
            <span>📊 3/8 missões concluídas</span>
            <div className="progress-bar">
              <div style={{ width: "38%" }}></div>
            </div>
          </div>
        </header>

        <section className="mapa-container">
          <div className="mapa">
            {/* SVG para as linhas de conexão */}
            <svg className="linhas-svg" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid meet">
              {/* Linha 1: Fase 1 -> Fase 2 */}
              <path 
                d="M 160 100 Q 300 80 400 160" 
                className={`linha-caminho ${fases[1]?.status === "bloqueada" ? "bloqueada" : ""}`}
                stroke={fases[1]?.status === "bloqueada" ? "#444" : "#FFD700"}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              {/* Linha 2: Fase 2 -> Fase 3 */}
              <path 
                d="M 460 200 Q 520 280 400 320" 
                className={`linha-caminho ${fases[2]?.status === "bloqueada" ? "bloqueada" : ""}`}
                stroke={fases[2]?.status === "bloqueada" ? "#444" : "#4CAF50"}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              {/* Linha 3: Fase 3 -> Fase 4 */}
              <path 
                d="M 340 370 Q 280 430 460 460" 
                className={`linha-caminho ${fases[3]?.status === "bloqueada" ? "bloqueada" : ""}`}
                stroke={fases[3]?.status === "bloqueada" ? "#444" : "#5d3fd3"}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              {/* Linha 4: Fase 4 -> Fase 5 */}
              <path 
                d="M 520 500 Q 580 560 400 580" 
                className={`linha-caminho ${fases[4]?.status === "bloqueada" ? "bloqueada" : ""}`}
                stroke={fases[4]?.status === "bloqueada" ? "#444" : "#666"}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              {/* Linha 5: Fase 5 -> Fase 6 */}
              <path 
                d="M 340 620 Q 300 660 500 640" 
                className={`linha-caminho ${fases[5]?.status === "bloqueada" ? "bloqueada" : ""}`}
                stroke={fases[5]?.status === "bloqueada" ? "#444" : "#666"}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Fases */}
            {fases.map((fase, index) => (
              <div
                key={fase.id}
                className={`fase ${fase.status} ${fase.boss ? "boss" : ""}`}
                style={{
                  position: 'absolute',
                  left: [
                    '12%', '42%', '18%', '52%', '22%', '50%'
                  ][index],
                  top: [
                    '70px', '160px', '320px', '440px', '560px', '580px'
                  ][index],
                }}
              >
                <div className={`fase-card ${fase.status}`}>
                  <div 
                    className="fase-icon-wrapper"
                    onClick={() => handleFaseClick(fase)}
                    style={{ cursor: fase.status !== "bloqueada" ? "pointer" : "default" }}
                  >
                    {fase.status === "concluida" ? (
                      <div className="fase-icon" style={{ background: fase.cor }}>
                        ✅
                      </div>
                    ) : fase.status === "atual" ? (
                      <div className="fase-icon" style={{ background: fase.cor, border: '3px solid #FFD700' }}>
                        {fase.icone}
                      </div>
                    ) : (
                      <div className="fase-icon" style={{ background: '#333440' }}>
                        🔒
                      </div>
                    )}
                    
                    {fase.status === "atual" && (
                      <div className="pulse-ring"></div>
                    )}
                  </div>
                  
                  <div className="fase-info">
                    <h3>{fase.titulo}</h3>
                    <p>{fase.subtitulo}</p>
                    <div className={`status-badge ${fase.status}`}>
                      {fase.status === "concluida" && "✅ Concluída"}
                      {fase.status === "atual" && "⚡ Em andamento"}
                      {fase.status === "bloqueada" && "🔒 Bloqueada"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}