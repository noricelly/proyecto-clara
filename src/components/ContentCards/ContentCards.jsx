import React from 'react'
import './ContentCards.scss';

    const ContentCards = ({data}) => {
        console.log(data)
        return (
           
            <>
{ data.map((content)=> (

<div className='contentCard' key={content.id}>
<div className='contentCard__image'>
    <figure>
        <img src={content.image} alt="Blabha" />
    </figure>
</div>
<div className='contentCard__content'>
    <h2>{content.title}</h2>
    <a href={content.link}>Contenido Multimedia</a>
    <p>{content.content}</p>
    <div>
        
    </div>
</div>
</div>


))

}

          </>

        )
      }

export default ContentCards