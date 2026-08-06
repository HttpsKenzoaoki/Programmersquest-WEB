"use client";
import "./primeiro-codigo.css";
import { useRouter } from 'next/navigation';

export default function PrimeiroCodigo() {
  const router = useRouter();

  const handleIrParaDesafio = function() {
    router.push('/trilhas/primeiro-desafio');
  };

  const handleVoltarMapa = function() {
    router.push('/missoes');
  };

  return (
    <main className="aula-page">
      <section className="aula-container">
        <header className="aula-header">
          <div>
            <h1>✅ Primeiro Código</h1>
            <p>Aprenda os primeiros conceitos de programação jogando.</p>
          </div>

          <button className="btn-voltar" onClick={handleVoltarMapa}>
            ← Voltar ao mapa
          </button>
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

            <div className="dica-importante">
              <h3>💡 Dica importante:</h3>
              <p>
                Em C, usamos <code>printf()</code> para mostrar mensagens na tela.
                O comando <code>#include &lt;stdio.h&gt;</code> é necessário para
                usar funções de entrada e saída.
              </p>
            </div>
          </div>

          <aside className="jogo-card">
            <h2>🎮 Desafio da Missão</h2>
            <p>
              Complete o desafio para ganhar XP e liberar a próxima etapa.
            </p>

            <div className="pergunta">
              <h3>Qual comando representa melhor uma instrução?</h3>

              <button className="opcao" onClick={function() { alert('❌ Tente novamente! Dormir não é uma instrução de programação.'); }}>
                A) Dormir até o computador funcionar
              </button>
              <button className="opcao" onClick={function() { alert('✅ Correto! Mostrar uma mensagem é uma instrução básica em programação.'); }}>
                B) Mostrar uma mensagem na tela
              </button>
              <button className="opcao" onClick={function() { alert('❌ Tente novamente! Esperar magia não é uma instrução válida.'); }}>
                C) Esperar a magia acontecer
              </button>
            </div>

            <button className="btn-desafio" onClick={handleIrParaDesafio}>
              ⚔️ Ir para o Desafio Prático
            </button>
          </aside>
        </section>
      </section>
    </main>
  );
}