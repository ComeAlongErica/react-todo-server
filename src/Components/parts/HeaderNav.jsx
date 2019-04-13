import React from 'react'
import styled from 'styled-components'
import { Trash2, Plus } from 'react-feather'

import ActionButton from './ActionButton'

const NavContainer = styled.div`
}
`

const HeaderNav = props => {
  const add = <Plus size={30} stroke={'#ffae0d'} strokeWidth={3} />
  const trash = <Trash2 size={30} stroke={'#ffae0d'} strokeWidth={3} />
  const renderNav = [add, trash]
  return (
    <NavContainer>
      {renderNav.map((icon, idx) => <ActionButton key={idx} icon={icon} />)}
    </NavContainer>
  )
}

export default HeaderNav
