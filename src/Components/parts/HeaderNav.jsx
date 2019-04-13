import React from 'react'
import styled from 'styled-components'
import { Trash2, Plus } from 'react-feather'

import ActionButton from './ActionButton'

const NavContainer = styled.div`
}
`

const HeaderNav = props => {
  const add = <Plus size={30} stroke={'#ffd74e'} strokeWidth={3} />
  const trash = <Trash2 size={30} stroke={'#ffd74e'} strokeWidth={3} />
  const renderNav = [add, trash]
  return (
    <NavContainer>
      {renderNav.map(icon => <ActionButton icon={icon} />)}
    </NavContainer>
  )
}

export default HeaderNav
