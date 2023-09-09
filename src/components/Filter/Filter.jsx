import React from 'react'
import './Filter.scss'
import { Button } from 'react-bootstrap'
const Filter = ({onClick , filter}) => {

  return (
    <div className='filter__container'>
        <ul className='filter__list'>
            <Button onClick={() => onClick('ansiedad')} className={filter === 'ansiedad' && 'filter__actived'}>Ansiedad</Button>
            <Button onClick={() => onClick('depresion')}className={filter === 'depresion' && 'filter__actived'}>Depresion</Button>
            <Button onClick={() =>onClick('enojo')} className={filter === 'enojo' && 'filter__actived'}>Enojo</Button>
        </ul>
    </div>
  )
}


export default Filter