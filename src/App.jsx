import './App.css';
import logo from './assets/fisionearprev.png';
import { FaDumbbell } from 'react-icons/fa';
import {IoIosHeartEmpty } from 'react-icons/io';
import { TbProgressCheck } from 'react-icons/tb';
import { useState, useEffect, use } from 'react';

function App() {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 200);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      <header>
        <img src={logo} alt="Logo Fisiotech" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Funcionalidades</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Serviços</a></li>
          </ul>
        </nav>
      </header>

      <main>
      <section className="hero-section">
        <h1>Fisioterapia Guiada por IA</h1>
        <p>Exercícios personalizados e feedback em tempo real para sua recuperação, no conforto da sua casa</p>
        <button className="cta-button">Comece agora!</button>
      </section>

      <section className ="feature-section">
        <h2> O que nossa IA pode fazer por você</h2>
        <div className="feature-container">
          <div className="feature-item">
            <FaDumbbell size={50} color="#007bff"/>
            <h3>Planos personalizados</h3>
            <p>Crie uma rotina de exercícios sob medida para suas necessidades.</p> 
            </div>
          <div className ="feature-item">
            <IoIosHeartEmpty size={50} color="#007bff"/>
            <h3>Feedback em tempo real</h3>
            <p>Receba orientações instantâneas para corrigir seus movimentos.</p>
        </div>
        <div className ="feature-item">
            <TbProgressCheck size={50} color="#007bff"/>
            <h3>Acompanhamento de progresso</h3>
            <p>Monitore sua evolução e ajuste seu plano conforme necessário.</p>
        </div>
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;