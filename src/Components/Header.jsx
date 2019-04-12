import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
width: 100vw;
background-image: linear-gradient( to right, #ffd74e, #ffae0d);
height: 120px;
`

const Header = props => {
  return <HeaderContainer>Hello</HeaderContainer>
};

export default Header;
