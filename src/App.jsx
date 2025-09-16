import './App.css';
import logo from './assets/fisionearprev.png';
import { FaDumbbell } from 'react-icons/fa';
import {IoIosHeartEmpty } from 'react-icons/io';
import { TbProgressCheck } from 'react-icons/tb';
import { useRef, useEffect, useState } from 'react';

function App() {
  const featureRef = useRef([]);  
  const [isIntersecting, setIsIntersecting] = useState({});

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsIntersecting((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }));
          });
        },
        {
          threshold: 0.5,
        }
      );

      featureRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        featureRef.current.forEach((el) => {
          if (el) {
            observer.unobserve(el);
          }
        });
      };
    }, []);

    const featureItems = [
      { id: 'feature-1', icon: <FaDumbbell size={50} color="#007bff" />, title: 'Planos personalizados', description: 'Crie uma rotina de exercícios sob medida para suas necessidades.' },
      { id: 'feature-2', icon: <IoIosHeartEmpty size={50} color="#007bff" />, title: 'Feedback em tempo real', description: 'Receba orientações instantâneas para corrigir seus movimentos.' },
      { id: 'feature-3', icon: <TbProgressCheck size={50} color="#007bff" />, title: 'Acompanhamento de progresso', description: 'Monitore sua evolução e ajuste seu plano conforme necessário.' },
    ]

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
  <h1><span className="highlight">Fisioterapia</span> Guiada por IA</h1>
        <p>Exercícios personalizados e feedback em tempo real para sua recuperação, no conforto da sua casa</p>
        <button className="cta-button">Comece agora!</button>

        <section className ="feature-section">
        <h2> O que nossa IA pode fazer por você</h2>
        <div className="feature-container">
          {featureItems.map((item, index) => (
            <div 
              key={item.id}
              id={item.id}
              ref={(el) => (featureRef.current[index] = el)}
              className={`feature-item ${isIntersecting[item.id] ? 'animate' : ''}`}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
 </main>
</div>
  );
}

export default App;