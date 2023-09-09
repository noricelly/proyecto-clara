import React from 'react'
import Hamburger from "../../hamburger/Hamburger.jsx"
import ContentCards from '../../components/ContentCards/ContentCards.jsx'
import Content from '../Content/Content.jsx'

const UserFeed = ({setUserRole}) => {
  return (
    <><Hamburger setUserRole={setUserRole}/>
    <Content/>
    </>
  )
}

export default UserFeed