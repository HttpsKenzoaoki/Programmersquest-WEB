"use client";
import "./variaveis.css";
import { useRouter } from 'next/navigation';

export default function Variaveis() {
  const router = useRouter();

  const handleIrParaDesafio = function() {
    router.push('/trilhas/variaveis-desafio');
  };

  const handleVoltarMapa = function() {
    router.push('/missoes');
  };

  return (
    <main className="aula-page">
      <section className="aula-container">
        <header className="aula-header">
          <div>
            <h1>📦 Variáveis em C</h1>
            <p>Aprenda como armazenar e manipular dados na memória do computador.</p>
          </div>

          <button className="btn-voltar" onClick={handleVoltarMapa}>
            ← Voltar ao mapa
          </button>
        </header>

        <section className="aula-grid">
          <div className="conteudo">
            <h2>📖 O que são Variáveis?</h2>

            <p>
              Variáveis são espaços na memória do computador onde podemos armazenar
              dados. Pense nelas como caixas com etiquetas, onde você guarda valores
              que podem mudar durante a execução do programa.
            </p>

            <div className="exemplo">
              <h3>Exemplo em C:</h3>

              <pre>{`#include <stdio.h>

int main() {
    // Declarando variáveis
    int idade = 25;
    float altura = 1.75;
    char inicial = 'M';
    
    printf("Idade: %d\\n", idade);
    printf("Altura: %.2f\\n", altura);
    printf("Inicial: %c\\n", inicial);
    
    return 0;
}`}</pre>
            </div>

            <h2>🧠 Tipos de Dados em C</h2>

            <p>
              Cada variável em C precisa ter um tipo definido, que determina que tipo
              de dado ela pode armazenar:
            </p>

            <ul>
              <li><strong>int</strong> → números inteiros (ex: 10, -5, 42)</li>
              <li><strong>float</strong> → números decimais (ex: 3.14, -2.5)</li>
              <li><strong>char</strong> → caracteres individuais (ex: 'A', 'b', '7')</li>
              <li><strong>double</strong> → decimais com maior precisão</li>
            </ul>

            <div className="dica-importante">
              <h3>💡 Dica importante:</h3>
              <p>
                Ao declarar uma variável, você deve especificar seu tipo antes do nome.
                Exemplo: <code>int numero = 10;</code> cria uma variável do tipo inteiro
                chamada "numero" com o valor 10.
              </p>
            </div>

            <h2>📋 Sintaxe Básica</h2>
            <div className="exemplo">
              <pre>{`// Declaração de variável
tipo nome_da_variavel;

// Declaração com inicialização
tipo nome_da_variavel = valor_inicial;

// Exemplos:
int contador;
float preco = 19.99;
char letra = 'X';`}</pre>
            </div>
          </div>

          <aside className="jogo-card">
            <h2>🎮 Desafio da Missão</h2>
            <p>
              Complete o desafio para ganhar XP e liberar a próxima etapa.
            </p>

            <div className="pergunta">
              <h3>Qual é a forma correta de declarar uma variável em C?</h3>

              <button className="opcao" onClick={function() { alert('❌ Tente novamente! Em C, o tipo vem antes do nome da variável.'); }}>
                A) variavel int idade = 25;
              </button>
              <button className="opcao" onClick={function() { alert('✅ Correto! Em C, a sintaxe correta é tipo nome = valor;'); }}>
                B) int idade = 25;
              </button>
              <button className="opcao" onClick={function() { alert('❌ Tente novamente! "int" é uma palavra-chave do C, não pode ser usada como nome de variável.'); }}>
                C) int = idade 25;
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