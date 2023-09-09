import React, { useState } from "react";
import './hamburger.scss';

const Hamburger = () => {
    const[openMenu, setOpenMenu] = useState (false)
    const handleMenu = ()=>{
        if (openMenu ==false) {
            setOpenMenu(true)
        }
        else {
            setOpenMenu(false)
        }
    }
    return(
        <>
        <img src='/Images/Register/hamburger.jpeg' alt="rhery" onClick={handleMenu} />
        {
            openMenu && 
            <section>
            <h1>hola</h1>
            </section>
        }
            
        </>
    )
}

export default Hamburger;