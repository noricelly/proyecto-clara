import React, { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import ContentCards from '../../components/ContentCards/ContentCards'

import './content.scss';

const data = [{
    id:'1',
    image: '/imgs/ansiedad.jpeg',
    title:"Ansiedad: Exceso de Futuro",
    content:"La ansiedad es una emoción normal que todos experimentamos de vez en cuando. Sin embargo, cuando la ansiedad es excesiva, puede ser un signo de un problema subyacente. Una de las causas de la ansiedad es el exceso de futuro. ",
    type:"ansiedad",
    link:"https://open.spotify.com/episode/0tj95tBuyyiHnxs2mrbbaP?si=5403d001d3f54645"
    
},{
    id:'2',
    image: '/imgs/enojo.jpeg',
    title:"Enojo: ¿Ira silenciad?",
    content:"La ira es una emoción natural que todos experimentamos de vez en cuando. Sin embargo, a veces la ira puede ser silenciada por diferentes razones, como el miedo al rechazo, el deseo de complacer a los demás o la falta de confianza en uno mismo. ",
    type:"enojo",
    link:"https://open.spotify.com/episode/4g5hXDxKenTKErWKmbGgfZ"
},
,{
    id:'3',
    image: '/imgs/depresion.jpeg',
    title:"Depresion: Frustracion en Silencio",
    content:"La depresión es un trastorno mental que afecta el estado de ánimo, el pensamiento y el comportamiento. Las personas con depresión pueden experimentar una variedad de síntomas, como tristeza, pérdida de interés, cambios en el apetito o el peso, problemas para dormir y fatiga. Una de las características de la depresión es la frustración.",
    type:"depresion",
    link:"https://open.spotify.com/episode/1Vxmk1q4SQA5Ufyqtmca4z?si=17a2037a407040cc" 
},]
const Content = () => {
    const [dataFiltered, setDataFiltered] = useState(data);
    const [filter, setFilter] = useState(undefined)
    
    useEffect(()=> {
        if(filter != null){
            setDataFiltered(data.filter((item)=> item.type === filter))

        }

    },[filter])

    return (
      <main className='content'>
          <section className='content__filter'>
              <Filter onClick={setFilter}/>
          </section>
          <section className='content__contentCard'>
              <ContentCards data={dataFiltered}/>
            <p>{filter}</p>
          </section>
      </main>
    )
  }

export default Content