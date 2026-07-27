'use client'; // se for Next.js com App Router

import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

export default function PrimeiroDesafio() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: `// Escreva seu código aqui\n`,
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
    });

    return () => editor.dispose(); // limpa ao desmontar
  }, []);

  return (
    <main className="aula-page">
      <section className="aula-container">
        <header className="aula-header">
          <div>
            <h1>✅ Primeiro Desafio</h1>
            <p>Coloque em prática os conceitos aprendidos.</p>
          </div>
        </header>
        <div id="editor" ref={editorRef} style={{ height: '400px' }} />
      </section>
    </main>
  );
}