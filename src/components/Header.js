import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import {Button} from "../components/Button"


const Header = () => {
  return (
    <Nav>
      <NavLink to="/">HOME</NavLink>
      <Bars></Bars>
      <NavMenu>
        {menuData.map((item, index)=>(
          <NavLink key={index} to={item.link}>{item.title}</NavLink>
        ))}
      </NavMenu>
      <NavBtn>
          <Button primary="true" round="true" to="/trips"> Book A Flight </Button>
      </NavBtn>
    </Nav>
  )
}


export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem cakc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px){
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%m 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }

`