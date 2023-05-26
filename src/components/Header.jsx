import React, {useState} from 'react';
import styled from "styled-components";
import logo from '../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    height: 80px;
    position: sticky;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    display: flex;

`


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;


const StyeldLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 76px;

      & img {
      width: 55px;
      height: 30px;
      margin-right: 10px;
    }

    & p {
      color: black;
      font-weight: 700;
      font-size: 32px;
      text-decoration: none;
    }
`

const IconWrapper = styled.span`
  font-size: 2.2rem;
  cursor:pointer;
  position: absolute;
  left: 88.88%;
  top: 28.33%;
  bottom: 8.33%;
`


export default function Header() {
  const [view, setView] = useState(false);
    return (
        <div>
            <HeaderContainer>
              <LogoWrapper>
                <StyeldLink to='/'>
                  <img src={logo} alt="logo"/>
                  <p>COZ Shopping</p>
                </StyeldLink>
              </LogoWrapper>
              <IconWrapper onClick={() => setView(!view)}>
                <RxHamburgerMenu/>
                {view && <Dropdown/>}
              </IconWrapper>
            </HeaderContainer>
        </div>
    );
}