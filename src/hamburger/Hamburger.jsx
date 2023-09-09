import React, { useState } from "react";
import './hamburger.scss';
import Swal from "sweetalert2";

const Hamburger = async () => {

    const { value: formValues } = await Swal.fire({
        title: 'Multiple inputs',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">',
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


    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        if (openMenu == false) {
            setOpenMenu(true)
        }
        else {
            setOpenMenu(false)
        }
    }
    return (
        <>
            <img src='/Images/Register/hamburger.jpeg' alt="rhery" onClick={handleMenu} className="hamburger" />
            {
                openMenu &&
                <section className="menu">
                     <a href="https://calendly.com/nory1291">Agende su cita</a>
                    <a href="https://wa.me/+573043668692/">Botón de pánico</a>
                    <span>¿Quieres ayudarnos?</span>
                    <button>Cerrar sesión</button>
                    
                </section>
            }

        </>
    )
}

export default Hamburger;