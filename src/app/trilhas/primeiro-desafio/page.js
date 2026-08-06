'use client';

import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import { useRouter } from 'next/navigation';
import './primeiro-desafio.css';

export default function PrimeiroDesafio() {
  const editorRef = useRef(null);
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const router = useRouter();

  useEffect(() => {
    monaco.languages.register({ id: 'c' });
    
    const editor = monaco.editor.create(editorRef.current, {
      value: '#include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}',
      language: 'c',
      theme: 'vs-dark',
      automaticLayout: true,
      fontSize: 16,
      fontFamily: 'Consolas, monospace',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: 'on',
      roundedSelection: true,
      padding: { top: 20 },
    });

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, function() {
      handleRunCode();
    });

    return function() {
      editor.dispose();
    };
  }, []);

  const handleRunCode = function() {
    const editor = monaco.editor.getEditors()[0];
    const code = editor.getValue();
    setIsLoading(true);
    setOutput('');
    setIsCorrect(null);

    setOutput('⏳ Compilando...\n');

    setTimeout(function() {
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
        var errors = [];
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

  const handleClearCode = function() {
    const editor = monaco.editor.getEditors()[0];
    editor.setValue('#include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}');
    setOutput('');
    setIsCorrect(null);
  };

  const handleShowHint = function() {
    setShowHint(!showHint);
  };

  const handleNextLevel = function() {
    router.push('/missoes');
  };

  return (
    <main className="desafio-page">
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
        <div className="desafio-container">
          <header className="desafio-header">
            <div className="header-left">
              <button className="btn-back" onClick={function() { router.push('/missoes'); }}>
                ← Voltar
              </button>
              <div>
                <h1>💡 Primeiro Desafio em C</h1>
                <p>Escreva um programa em C que imprima <strong>"Hello World!"</strong> no console.</p>
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
                <div id="editor" ref={editorRef} style={{ height: '400px', width: '100%' }} />
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
              <div className={'output-content' + (isCorrect === true ? ' success' : '') + (isCorrect === false ? ' error' : '')}>
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
                  <p className="hint-example">🔑 Use <code>printf("Hello World!\n");</code> para imprimir.</p>
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
                    <p className="success-detail">+150 XP • +75 Mana • 🏆 Desbloqueou: "Programador C"</p>
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