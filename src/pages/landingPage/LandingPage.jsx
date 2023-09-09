import React from "react";
import { useEffect, useState } from 'react'
import "./main.scss";
import { useNavigate, useParams } from "react-router"
import Swal from "sweetalert2";

const LandingPage = () => {
  const navigate = useNavigate()
  const [oponer, setOponer] = useState(false)

  const handleOpen = ()=> {
    if(oponer == false){
    setOponer(true)}else{
      setOponer(false)
    }
  }

  const calorFn = ()=>{
    Swal.fire({
      title: 'El calor normalmente se puede presentar cuando ',
      text: 'Tienes ansiedad,  estrés postraumático o problemas alimentarios, si sientes que necesitas ayuda presiona el boton y registrate ',
      imageUrl: '/Images/sintomas/calor.jpg',
      confirmButtonText:
      'Comenzar',
      confirmButtonColor: '#1CACA5',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogin()
      }
    })
  }

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
            CLARA es una plataforma centrada en el apoyo a la salud mental de
            poblaciones rurales y urbanas. Nos importa tu cuidado, quien eres y
            como estas. Brindamos diferentes servicios de atencion y multiples
            recursos para el mejor cuidado de salud mental.
          </p>
          <h2>¿Te gustaria empezar?</h2>
          <button onClick={handleRegister}>Empieza ya</button>
        </section>
        <section className="landingPage__main__recognition">
          <h2>Conecta con tu mundo interior</h2>
          <span onClick={handleOpen}>Ejercicio de reconocimiento</span>
        { oponer && <p>
          Imagina que eres un explorador dentro de ti mismo, como un detective de emociones. Cada día, tomas un tiempo especial para sentarte tranquilo y prestar mucha atención a cómo te sientes por dentro. Cierras los ojos y escuchas tus pensamientos, como si fueran historias que estás contando a ti mismo.

También pones atención en cómo se siente tu cuerpo. ¿Sientes mariposas en el estómago cuando estás emocionado o tenso? ¿Tu corazón late rápido cuando estás asustado? ¿O tal vez sientes una calma y paz cuando estás feliz?

El mindfulness es como un superpoder que te ayuda a entender tus emociones y sensaciones. Te permite conocerlas y aceptarlas, como si fueran amigos. Así, cuando te sientas triste, enojado o feliz, sabrás qué está pasando en tu interior y podrás manejarlo de la mejor manera.

Recuerda, es como una aventura dentro de ti mismo para descubrir cómo te sientes. Aprovecha ese conocimiento que acabas de adquirir sobre ti mismo y observa si alguno de los siguientes sintomas hacen parte de tu situaciòn actual.
          </p>}
        </section>
        <section className="landingPage__main__healthy">
          <h3>¿Sentiste alguno de los siguientes sintomas?</h3>
          <article  className="landingPage__main__healthy__sintoma" onClick={calorFn}>
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
