import React, { useState } from "react";
import './hamburger.scss';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
const Hamburger =  ({setUserRole}) => {
const navegate = useNavigate()
  const form = async() => {
    const { value: formValues } = await Swal.fire({
      title: 'Encuesta de población',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="¿Cuál es tu edad?">' +
        '<input id="swal-input2" class="swal2-input" placeholder="¿Donde vives?">' +
        '<input id="swal-input2" class="swal2-input" placeholder="¿Cuál es tu genero?">' +
        '<input id="swal-input2" class="swal2-input" placeholder="¿Cuál es tu escolaridad?">' +
        '<input id="swal-input2" class="swal2-input" placeholder="¿Cuál es tu estado civil?">' +
        '<input id="swal-input2" class="swal2-input" placeholder="¿Cómo te sientes?">'
        ,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    
    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }

  }
    

    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        if (openMenu == false) {
            setOpenMenu(true)
        }
        else {
            setOpenMenu(false)
        }
    }
    const handleCerrar= ()=>{
    
      Swal.fire({
        title: '¿Cerrar Sesión?',
        text: '¿Estás seguro de que deseas cerrar sesión?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire('¡Cerrado!', 'Has cerrado sesión exitosamente.', 'success');
          setUserRole(false)
          navegate("/")
        }
      });
    }
    return (
        <>
            <img src='/Images/Register/hamburger.jpeg' alt="rhery" onClick={handleMenu} className="hamburger" />
            {
                openMenu &&
                <section className="menu">
                     <a href="https://calendly.com/nory1291">Agende su cita</a>
                     <a href="https://wa.me/+573043668692?text=Hola%2C%20necesito%20ayuda">¡Tengo una emergencia!</a>
                    <span onClick={form}>¿Quieres ayudarnos?</span>
                    <button onClick={handleCerrar} className="btn btn-">Cerrar sesión</button>
                    
                </section>
            }

        </>
    )
}

export default Hamburger;