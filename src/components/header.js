import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">TravelX</NavLink>
    </Nav>
    )
  }
export default Header

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-conent: space-between;
  padding: .5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
` 

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
`