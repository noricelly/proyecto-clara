import React, { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import ContentCards from '../../components/ContentCards/ContentCards'

import './content.scss';

const data = [{
    id:'1',
    image: '/imgs/enojo.jpeg',
    title:"",
    content:"",
    type:"ansiedad"
},{
    id:'2',
    image: '',
    title:"",
    content:"",
    type:""
},
,{
    id:'3',
    image: '',
    title:"",
    content:"",
    type:""
},]
const Content = () => {
    const [dataFiltered, setDataFiltered] = useState(data);
    const [filter, setFilter] = useState(null)
    
    useEffect(()=> {
        setDataFiltered(data.filter((item)=> item.type === filter))

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