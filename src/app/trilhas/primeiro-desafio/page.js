'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Editor from '@monaco-editor/react';
import './primeiro-desafio.css';

export default function PrimeiroDesafio() {
  
  const [code, setCode] = useState('#include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}');
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const router = useRouter();

  const handleRunCode = () => {
    setIsLoading(true);
    setOutput('');
    setIsCorrect(null);

    setOutput('⏳ Compilando...\n');

    setTimeout(() => {
      const hasMain = code.includes('main');
      const hasPrintf = code.includes('printf');
      const hasInclude = code.includes('#include <stdio.h>');
      const hasReturn = code.includes('return 0');
      const hasHelloWorld = code.includes('Hello World!');

      if (hasInclude && hasMain && hasPrintf && hasReturn) {
        if (hasHelloWorld) {
          setIsCorrect(true);
          setOutput('🎉 PARABÉNS! Seu primeiro programa em C está funcionando!\n\n📤 Saída:\nHello World!');
        } else {
          setIsCorrect(false);
          setOutput('⚠️ Quase lá! A saída deve ser "Hello World!"\n\n📤 Saída:\n(Compilado, mas sem saída)');
        }
      } else {
        const errors = [];
        if (!hasInclude) errors.push('- Falta #include <stdio.h>');
        if (!hasMain) errors.push('- Falta int main()');
        if (!hasPrintf) errors.push('- Falta printf()');
        if (!hasReturn) errors.push('- Falta return 0;');
        
        setIsCorrect(false);
        setOutput('❌ Erros encontrados:\n' + errors.join('\n') + '\n\n💡 Use o template: #include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleClearCode = () => {
    setCode('#include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}');
    setOutput('');
    setIsCorrect(null);
  };

  const handleShowHint = () => {
    setShowHint(!showHint);
  };

  const handleNextLevel = () => {
    router.push('/missoes');
  };

  return (
    <main className="desafio-page">
      <aside className="sidebar">
        <h1>🧙 Programmer&apos;s Quest</h1>

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
        <div className="desafio-container">
          <header className="desafio-header">
            <div className="header-left">
              <button className="btn-back" onClick={() => router.push('/missoes')}>
                ← Voltar
              </button>
              <div>
                <h1>💡 Primeiro Desafio em C</h1>
                <p>Escreva um programa em C que imprima <strong>&quot;Hello World!&quot;</strong> no console.</p>
              </div>
            </div>
            <div className="header-right">
              <span className="level-badge">⭐ Missão 1/8</span>
            </div>
          </header>

          <div className="desafio-grid">
            <div className="editor-section">
              <div className="editor-header">
                <div className="editor-tabs">
                  <span className="tab active">📝 main.c</span>
                </div>
                <div className="editor-actions">
                  <button className="btn-hint" onClick={handleShowHint}>
                    💡 Dica
                  </button>
                  <button className="btn-clear" onClick={handleClearCode}>
                    🗑️ Limpar
                  </button>
                </div>
              </div>
              <div className="editor-wrapper">
                <Editor
                  height="400px"
                  defaultLanguage="c"
                  defaultValue={code}
                  theme="vs-dark"
                  onChange={(value) => setCode(value || '')}
                  loading={
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      height: '100%',
                      backgroundColor: '#1e1e1e',
                      color: '#ccc'
                    }}>
                      🔄 Carregando editor...
                    </div>
                  }
                  options={{
                    fontSize: 16,
                    fontFamily: 'Consolas, monospace',
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    lineNumbers: 'on',
                    roundedSelection: true,
                    padding: { top: 20 },
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>

            <div className="output-section">
              <div className="output-header">
                <span>📤 Saída</span>
                <div className="output-status">
                  {isCorrect === true && <span className="status-success">✅ Correto!</span>}
                  {isCorrect === false && <span className="status-error">❌ Incorreto</span>}
                  {isCorrect === null && <span className="status-idle">⏳ Aguardando...</span>}
                </div>
              </div>
              <div className={`output-content${isCorrect === true ? ' success' : ''}${isCorrect === false ? ' error' : ''}`}>
                {isLoading ? (
                  <div className="loading">
                    <div className="spinner"></div>
                    <p>Compilando código C...</p>
                  </div>
                ) : (
                  <pre>{output || '💻 Clique em "Executar" para compilar e ver o resultado aqui.'}</pre>
                )}
              </div>

              {showHint && (
                <div className="hint-box">
                  <h4>💡 Dica:</h4>
                  <p>Você precisa do template básico em C:</p>
                  <pre className="hint-code">{`#include <stdio.h>

int main() {
    printf("Hello World!\\n");
    return 0;
}`}</pre>
                  <p className="hint-example">🔑 Use <code>printf(&quot;Hello World!\n&quot;);</code> para imprimir.</p>
                </div>
              )}

              <div className="actions">
                <button 
                  className="btn-run" 
                  onClick={handleRunCode}
                  disabled={isLoading}
                >
                  {isLoading ? '⏳ Compilando...' : '▶️ Executar'}
                </button>
                {isCorrect === true && (
                  <button className="btn-next" onClick={handleNextLevel}>
                    🚀 Próximo Nível
                  </button>
                )}
              </div>

              {isCorrect === true && (
                <div className="success-message">
                  <div className="success-icon">🎉</div>
                  <div className="success-text">
                    <h3>Parabéns!</h3>
                    <p>Seu primeiro programa em C está funcionando perfeitamente!</p>
                    <p className="success-detail">+150 XP • +75 Mana • 🏆 Desbloqueou: &quot;Programador C&quot;</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}