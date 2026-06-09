import React from 'react';
import './page.css'; 

export default function ArcanePage() {
  return (
    <div className="arcane-container">
      
  
      <header className="arcane-navbar">
        <div className="navbar-content">
      
          <div className="navbar-brand">
            <div className="brand-icon">
              <span className="icon-spark">✦</span>
            </div>
            <span className="brand-name">Programmers Quest</span>
          </div>

          <nav className="navbar-links">
            <a href="inicio" className="nav-link active">Início</a>
            <a href="recursos" className="nav-link">Recursos</a>
            <a href="precos" className="nav-link">Preços</a>
          </nav>

          <div className="navbar-actions">
            <a href="login" className="link-login">Login</a>
            <a href="cadastro" className="link-cadastro">Cadastro</a>
          </div>
        </div>
      </header>

      <section className="hero-section">
      
        <div className="glow-ambient purple-glow"></div>
        <div className="glow-ambient pink-glow"></div>

        <div className="ghost-wrapper">
          <div className="ghost-neon-backdrop"></div>
          <img 
            src="Mago.png" 
            alt="Mago Arcane Coder" 
            className="ghost-avatar-floating"
          />
        </div>

        <h1 className="hero-title">
          Transforme Código em <span className="text-magic-gradient">Magia</span>
        </h1>
        
        <p className="hero-subtitle">
          Embarque em uma jornada épica onde aprender a programar é a sua maior aventura. 
          Derrote bugs, colete artefatos raros e torne-se o Mago Arcano do desenvolvimento moderno.
        </p>

        <div className="hero-cta-group">
          <button className="btn-primary-lg">
            <span className="btn-icon">⚡</span> Inicie Sua Jornada
          </button>
          <button className="btn-secondary-lg">
            Conhecer o Mapa
          </button>
        </div>
      </section>

      <section className="features-grid">

        <div className="feature-card xp-card">
          <div className="card-header">
            <div className="card-icon-box">
              <span>⤊</span>
            </div>
            <div className="card-text-block">
              <h3 className="card-title">XP por Lições</h3>
              <p className="card-description">
                Cada linha de código escrita rende Pontos de Experiência. Veja seu personagem evoluir à medida que domina novas sintaxes e paradigmas.
              </p>
            </div>
            <span className="card-star-icon">★</span>
          </div>

          <div className="xp-progress-wrapper">
            <div className="xp-labels">
              <span className="xp-level">NÍVEL 42: ARCANO JÚNIOR</span>
              <span className="xp-counter">750 / 1000 XP</span>
            </div>
            <div className="xp-bar-track">
              <div className="xp-bar-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        <div className="feature-card skill-card">
          <div className="skill-avatar-container">
            <div className="skill-glow-effect"></div>
            <div className="skill-sphere">
              <span className="skill-icon">📖</span>
            </div>
          </div>
          <h3 className="skill-title">Árvore de Habilidades</h3>
          <p className="skill-description">
            Desbloqueie novos caminhos mágicos: de Invocador de Frontend a Mestre do Backend.
          </p>
        </div>
      </section>

      <section className="quests-section">
        <div className="quests-container">

          <div className="code-mockup">
            <div className="mockup-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <pre className="code-content">
              <code>
                <span className="code-comment">// Missão: Ponte API</span>{'\n'}
                <span className="code-keyword">const</span> <span className="code-function">summonBridge</span> = <span className="code-keyword">async</span> () =&gt; &#123;{'\n'}
                {'  '}<span className="code-keyword">try</span> &#123;{'\n'}
                {'    '}<span className="code-keyword">await</span> fetch(<span className="code-string">'/api/abismo'</span>);{'\n'}
                {'  '}&#125; <span className="code-keyword">catch</span> (err) &#123;{'\n'}
                {'    '}burnDragon();{'\n'}
                {'  '}&#125;{'\n'}
                &#125;;
              </code>
            </pre>
          </div>

          <div className="quests-info">
            <div className="badge-epic">
              <span>🏆</span> Missão Épica Disponível
            </div>
            <h2 className="quests-title">
              Projetos Reais como <span className="text-underline-wavy">Quests</span>
            </h2>
            <p className="quests-description">
              Esqueça tutoriais chatos. Construa aplicações do mundo real moldadas como missões épicas. 
              Resgate o banco de dados do Reino contra dragões de SQL Injection ou construa a Ponte API sobre o Abismo da Depreciação.
            </p>
            <a href="#missoes" className="quests-link">
              Ver Diário de Missões <span className="arrow-transition">→</span>
            </a>
          </div>

        </div>
      </section>

      <footer className="arcane-footer">
        <div className="footer-links-grid">
          <div className="footer-brand-col">
            <div className="navbar-brand">
              <div className="brand-icon">
                <span className="icon-spark">✦</span>
              </div>
              <span className="brand-name">Arcane Coder</span>
            </div>
            <p className="footer-tagline">
              Gamificando o futuro da educação tecnológica. Transforme sua carreira em uma jornada de RPG.
            </p>
          </div>

          <div className="footer-column">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#missoes">Missões</a></li>
              <li><a href="#skilltrees">Skill Trees</a></li>
              <li><a href="#guildas">Guildas</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Comunidade</h4>
            <ul>
              <li><a href="#discord">Discord</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#rankings">Rankings</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#termos">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PROGRAMMER'S QUEST. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="footer-policies">
            <a href="#privacidade">PRIVACIDADE</a>
            <a href="#cookies">COOKIES</a>
          </div>
        </div>
      </footer>

    </div>
  );
}