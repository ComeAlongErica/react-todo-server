import React from 'react'
import styled from 'styled-components'
import { Trash2, Plus } from 'react-feather'

import ActionButton from './ActionButton'

const NavContainer = styled.div`
}
`

const HeaderNav = props => {
  const { addTask, deleteAll } = props
  const add = <Plus size={30} stroke={'#ffae0d'} strokeWidth={3} />
  const trash = <Trash2 size={30} stroke={'#ffae0d'} strokeWidth={3} />
  const renderNav = [
    { icon: add, handleClick: addTask },
    { icon: trash, handleClick: deleteAll }
  ]
  return (
    <NavContainer>
      {renderNav.map((item, idx) => <ActionButton key={idx} icon={item.icon} handleClick={item.handleClick} />)}
    </NavContainer>
  )
}

export default HeaderNav
