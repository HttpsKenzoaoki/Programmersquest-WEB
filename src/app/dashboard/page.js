"use client";

import { useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [popup, setPopup] = useState(null);

  function abrirPopup(tipo) {
    setPopup(tipo);
  }

  function fecharPopup() {
    setPopup(null);
  }

  return (
    <main className="dashboard-page">
      <aside className="sidebar">
        <h1>Programmer's Quest</h1>

        <div className="perfil">
          <div className="avatar">🧙‍♂️</div>
          <div>
            <h2>Level 14</h2>
            <p>Mana: 450/500</p>
          </div>
        </div>

        <button onClick={() => abrirPopup("bau")} className="daily-btn">
          🎁 Abrir Baú Diário
        </button>

        <nav>
          <a href="/dashboard" className="active">🏠 Início</a>
          <a href="/missoes">🗺️ Missões</a>
          <a href="/aprendizado">📖 Aprendizado</a>
          <a href="/inventario">🎒 Inventário</a>
          <a href="/ranking">🏆 Ranking</a>
          <a href="/configuracoes">⚙️ Configurações</a>
        </nav>
      </aside>

      <section className="content">
        <header className="hero-status">
          <div>
            <h2>Status do Herói</h2>
            <p>Continue sua jornada, jovem programadora.</p>
          </div>

          <div className="bars">
            <div>
              <div className="bar-text">
                <span>Experiência</span>
                <span>75% para o Level 15</span>
              </div>
              <div className="bar">
                <div className="xp"></div>
              </div>
            </div>

            <div>
              <div className="bar-text">
                <span>Mana</span>
                <span>450 / 500</span>
              </div>
              <div className="bar">
                <div className="mana"></div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid">
          <section className="quests">
            <h3>🗺️ Tarefas Ativas</h3>

            <div className="quest-list">
              <div className="quest-card">
                <div className="icon">🌳</div>
                <h4>Floresta das Variáveis</h4>
                <p>
                  Aprenda a guardar informações usando variáveis, como nome,
                  pontuação e vida do personagem.
                </p>

                <div className="quest-footer">
                  <span>+150 XP</span>
                  <button onClick={() => abrirPopup("variaveis")}>
                    Continuar
                  </button>
                </div>
              </div>

              <div className="quest-card">
                <div className="icon">🔁</div>
                <h4>Labirinto dos Loops</h4>
                <p>
                  Entenda como repetir ações usando estruturas como for e while.
                </p>

                <div className="quest-footer">
                  <span>+300 XP</span>
                  <button onClick={() => abrirPopup("loops")}>
                    Começar
                  </button>
                </div>
              </div>

              <div className="quest-card done">
                <div className="icon">✅</div>
                <h4>Primeiro Código</h4>
                <p>
                  Você já aprendeu os conceitos iniciais de lógica de
                  programação.
                </p>

                <div className="quest-footer">
                  <span>Concluído</span>
                  <button onClick={() => abrirPopup("revisao")}>
                    Revisar
                  </button>
                </div>
              </div>

              <div className="quest-card locked">
                <div className="icon">🔒</div>
                <h4>Castelo das Condições</h4>
                <p>
                  Aprenda a tomar decisões no código usando if, else e operadores.
                </p>

                <div className="quest-footer">
                  <span>Bloqueado</span>
                  <button onClick={() => abrirPopup("bloqueado")}>
                    Ver
                  </button>
                </div>
              </div>
            </div>
          </section>

          <aside className="right-panel">
            <div className="panel-card">
              <h3>🎁 Login Diário</h3>
              <p>Resgate sua poção de mana para continuar estudando.</p>
              <button onClick={() => abrirPopup("mana")}>
                Coletar +50 Mana
              </button>
            </div>

            <div className="panel-card">
              <h3>🏅 O que você já aprendeu</h3>

              <div className="badges">
                <span>HTML Iniciante</span>
                <span>CSS Básico</span>
                <span>Lógica</span>
                <span>Variáveis</span>
                <span className="locked-badge">JavaScript Bloqueado</span>
              </div>
            </div>

            <div className="panel-card">
              <h3>📌 Progresso Geral</h3>
              <p>✅ 3 tarefas feitas</p>
              <p>⏳ 2 tarefas pendentes</p>
              <p>🎮 1 fase em andamento</p>
              <p>🏆 4 conquistas liberadas</p>
            </div>
          </aside>
        </div>
      </section>

      {popup && (
        <div className="popup-bg">
          <div className="popup-card">
            <button className="close-btn" onClick={fecharPopup}>
              ✕
            </button>

            {popup === "bau" && (
              <>
                <h2>🎁 Baú Diário</h2>
                <p>
                  Você abriu seu baú diário e recebeu uma poção mágica para
                  continuar estudando.
                </p>
                <strong>Recompensa: +50 Mana</strong>
                <button onClick={fecharPopup}>Coletar recompensa</button>
              </>
            )}

            {popup === "mana" && (
              <>
                <h2>✨ Mana Restaurada</h2>
                <p>
                  Sua energia de aprendizado foi restaurada. Continue completando
                  tarefas para evoluir.
                </p>
                <strong>+50 Mana adicionada</strong>
                <button onClick={fecharPopup}>Continuar</button>
              </>
            )}

            {popup === "variaveis" && (
              <>
                <h2>🌳 Floresta das Variáveis</h2>
                <p>
                  Nesta missão, o aluno aprende o que são variáveis e como elas
                  guardam informações dentro de um programa.
                </p>
                <ul>
                  <li>Aprender o conceito de variável</li>
                  <li>Entender nome, valor e tipo</li>
                  <li>Resolver desafios simples</li>
                </ul>
                <button onClick={fecharPopup}>Entrar na missão</button>
              </>
            )}

            {popup === "loops" && (
              <>
                <h2>🔁 Labirinto dos Loops</h2>
                <p>
                  Aqui o aluno aprende como repetir comandos sem precisar
                  escrever o mesmo código várias vezes.
                </p>
                <ul>
                  <li>Entender repetição</li>
                  <li>Conhecer for e while</li>
                  <li>Evitar loops infinitos</li>
                </ul>
                <button onClick={fecharPopup}>Começar missão</button>
              </>
            )}

            {popup === "revisao" && (
              <>
                <h2>✅ Revisão: Primeiro Código</h2>
                <p>
                  Você já concluiu essa etapa. Revise os conceitos iniciais de
                  lógica e estrutura básica de um programa.
                </p>
                <button onClick={fecharPopup}>Revisar conteúdo</button>
              </>
            )}

            {popup === "bloqueado" && (
              <>
                <h2>🔒 Missão Bloqueada</h2>
                <p>
                  Complete as tarefas anteriores para liberar o Castelo das
                  Condições.
                </p>
                <strong>Requisito: concluir Labirinto dos Loops</strong>
                <button onClick={fecharPopup}>Entendi</button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}