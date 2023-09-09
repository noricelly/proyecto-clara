import React from 'react'
import './Filter.scss'
import { Button } from 'react-bootstrap'
const Filter = ({onClick}) => {

  return (
    <div className='filter__container'>
        <ul className='filter__list'>
            <Button onClick={() => onClick('ansiedad')}>Ansiedad</Button>
            <Button onClick={() => onClick('depresion')}>Depresion</Button>
            <Button onClick={() =>onClick('enojo')}>Enojo</Button>
        </ul>
    </div>
  )
}


export default Filter