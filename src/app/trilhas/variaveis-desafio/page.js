'use client';

import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import { useRouter } from 'next/navigation';
import './variaveis-desafio.css';

export default function VariaveisDesafioClient() {
  
  const editorRef = useRef(null);
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const router = useRouter();

  useEffect(() => {
    monaco.languages.register({ id: 'c' });
    
    const editor = monaco.editor.create(editorRef.current, {
      value: `#include <stdio.h>

int main() {
    // Declare uma variável chamada 'idade' do tipo int com valor 18
    // Declare uma variável chamada 'altura' do tipo float com valor 1.75
    // Declare uma variável chamada 'inicial' do tipo char com valor 'A'
    
    // Imprima as variáveis usando printf
    
    return 0;
}`,
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
      // Verificações para variáveis
      const hasMain = code.includes('main');
      const hasInclude = code.includes('#include <stdio.h>');
      const hasReturn = code.includes('return 0');
      
      // Verificações específicas para variáveis
      const hasIdade = code.includes('idade') && code.includes('int');
      const hasAltura = code.includes('altura') && code.includes('float');
      const hasInicial = code.includes('inicial') && code.includes('char');
      
      // Verifica se está imprimindo as variáveis
      const hasPrintf = code.includes('printf');
      const hasPrintfIdade = code.includes('idade') && code.includes('printf');
      const hasPrintfAltura = code.includes('altura') && code.includes('printf');
      const hasPrintfInicial = code.includes('inicial') && code.includes('printf');

      if (hasInclude && hasMain && hasReturn) {
        if (hasIdade && hasAltura && hasInicial) {
          if (hasPrintf && hasPrintfIdade && hasPrintfAltura && hasPrintfInicial) {
            setIsCorrect(true);
            setOutput('🎉 PARABÉNS! Você declarou e imprimiu todas as variáveis corretamente!\n\n📤 Saída do programa:\nIdade: 18\nAltura: 1.75\nInicial: A');
          } else {
            setIsCorrect(false);
            let errors = [];
            if (!hasPrintf) errors.push('- Falta printf() para imprimir os valores');
            if (!hasPrintfIdade) errors.push('- Falta imprimir a variável "idade"');
            if (!hasPrintfAltura) errors.push('- Falta imprimir a variável "altura"');
            if (!hasPrintfInicial) errors.push('- Falta imprimir a variável "inicial"');
            
            setOutput('⚠️ Variáveis declaradas, mas faltam os printf()!\n\n' + errors.join('\n'));
          }
        } else {
          let errors = [];
          if (!hasIdade) errors.push('- Falta declarar a variável "idade" (tipo int)');
          if (!hasAltura) errors.push('- Falta declarar a variável "altura" (tipo float)');
          if (!hasInicial) errors.push('- Falta declarar a variável "inicial" (tipo char)');
          
          setIsCorrect(false);
          setOutput('❌ Erros encontrados:\n' + errors.join('\n') + '\n\n💡 Lembre-se da sintaxe: tipo nome = valor;');
        }
      } else {
        var errors = [];
        if (!hasInclude) errors.push('- Falta #include <stdio.h>');
        if (!hasMain) errors.push('- Falta int main()');
        if (!hasReturn) errors.push('- Falta return 0;');
        
        setIsCorrect(false);
        setOutput('❌ Erros no template básico:\n' + errors.join('\n') + '\n\n💡 Use o template:\n#include <stdio.h>\n\nint main() {\n    // Seu código aqui\n    return 0;\n}');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleClearCode = function() {
    const editor = monaco.editor.getEditors()[0];
    editor.setValue(`#include <stdio.h>

int main() {
    // Declare uma variável chamada 'idade' do tipo int com valor 18
    // Declare uma variável chamada 'altura' do tipo float com valor 1.75
    // Declare uma variável chamada 'inicial' do tipo char com valor 'A'
    
    // Imprima as variáveis usando printf
    
    return 0;
}`);
    setOutput('');
    setIsCorrect(null);
  };

  const handleShowHint = function() {
    setShowHint(!showHint);
  };

  const handleNextLevel = function() {
    router.push('/missoes');
  };

  const handleCorrigirCodigo = function() {
    const editor = monaco.editor.getEditors()[0];
    const codigoCorrigido = `#include <stdio.h>

int main() {
    // Declaração de variáveis
    int idade = 18;
    float altura = 1.75;
    char inicial = 'A';
    
    // Impressão das variáveis
    printf("Idade: %d\\n", idade);
    printf("Altura: %.2f\\n", altura);
    printf("Inicial: %c\\n", inicial);
    
    return 0;
}`;
    editor.setValue(codigoCorrigido);
    setOutput('');
    setIsCorrect(null);
    setShowHint(false);
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
                <h1>📦 Desafio: Variáveis em C</h1>
                <p>Declare três variáveis de tipos diferentes e imprima seus valores no console.</p>
              </div>
            </div>
            <div className="header-right">
              <span className="level-badge">⭐ Missão 2/8</span>
            </div>
          </header>

          <div className="desafio-grid">
            <div className="editor-section">
              <div className="editor-header">
                <div className="editor-tabs">
                  <span className="tab active">📝 variaveis.c</span>
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
                  <pre>{output || '💻 Clique em "Executar" para testar suas variáveis em C.'}</pre>
                )}
              </div>

              {showHint && (
                <div className="hint-box">
                  <h4>💡 Dicas sobre Variáveis:</h4>
                  <p>📌 <strong>Sintaxe:</strong> <code>tipo nome = valor;</code></p>
                  <pre className="hint-code">{`int idade = 18;
float altura = 1.75;
char inicial = 'A';`}</pre>
                  <p>📌 <strong>Para imprimir:</strong></p>
                  <pre className="hint-code">{`printf("Idade: %d\\n", idade);
printf("Altura: %.2f\\n", altura);
printf("Inicial: %c\\n", inicial);`}</pre>
                  <p className="hint-example">🔑 <code>%d</code> para int, <code>%f</code> para float, <code>%c</code> para char</p>
                  <button className="btn-fix" onClick={handleCorrigirCodigo}>
                    ✨ Ver solução completa
                  </button>
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
                    <p>Você dominou a declaração e uso de variáveis em C!</p>
                    <p className="success-detail">+200 XP • +100 Mana • 🏆 Desbloqueou: "Mestre das Variáveis"</p>
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