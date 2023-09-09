import React from "react";
import { useEffect, useState } from 'react'
import "./main.scss";
import { useNavigate, useParams } from "react-router"
const LandingPage = () => {
  const navigate = useNavigate()

  const handleLogin = ()=>{
    navigate("/login")
  }
  const handleRegister = ()=>{
    navigate("/register")
  }

  return (
    <section className="landingPage">
      <header className="landingPage__header">
        <button className="landingPage__header__login" onClick={handleLogin}>Ingresar</button>
        <button className="landingPage__header__register" onClick={handleRegister}>Registrarte</button>
      </header>
      <figure className="landingPage__banner">
        <img src="/Images/Aboutus/banner.svg" alt="banner" />
      </figure>
      <main className="landingPage__main">
        <section className="landingPage__main__description">
          <p>
            CuiCare es una plataforma centrada en el apoyo a la salud mental de
            poblaciones rurales y urbanas. Nos importa tu cuidado, quien eres y
            como estas. Brindamos diferentes servicios de atencion y multiples
            recursos para el mejor cuidado de salud mental.
          </p>
          <h2>¿Te gustaria empezar?</h2>
          <button onClick={handleRegister}>Empieza ya</button>
        </section>
        <section className="landingPage__main__recognition">
          <h2>Conecta con tu mundo interior</h2>
          <span>Ejercicio de reconocimiento</span>
        </section>
        <section className="landingPage__main__healthy">
          <h3>¿Sentiste alguno de los siguientes sintomas?</h3>
          <article  className="landingPage__main__healthy__sintoma">
            <h4>¿Tienes mucho calor?</h4>
            <figure>
              <img src="/Images/sintomas/calor.jpg" alt="calorExcesivo" />
            </figure>
          </article>
          <article className="landingPage__main__healthy__sintoma">
            <h4>¿Tiemblas bastante?</h4>
            <figure>
              <img src="/Images/sintomas/temblor.jpg" alt="Temblor" />
            </figure>
          </article>
        </section>
        <section className="landingPage__main__help">
          <h2>¿Eres profesional de la salud Mental y quieres ayudarnos?</h2>
          <button>Brindar ayuda</button>
        </section>
      </main>
    </section>
  );
};

export default LandingPage;
