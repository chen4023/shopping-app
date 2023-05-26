import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { AiOutlineGift } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

const DropdownContainer = styled.div`
    position: absolute;
    right:-66px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`
const Menus = styled.section`
    width: 200px;
    height: 172px;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    background: #FFFFFF;
    border-radius: 12px;


    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      height:33%;
      color:black;
      padding: 8px 13px;
      cursor: pointer;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    }
`
// 링크태그는 style-component를 적용하는 방식이 조금 다름 !
const StyeldLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height:33%;
  color:black;
  padding: 8px 13px;
  cursor: pointer;
  text-decoration: none;
  &:nth-child(2) {
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}
`;



export default function Dropdown() {
    return (
        <DropdownContainer>
            <Menus>
              <div>000님, 안녕하세요!</div>
              <StyeldLink to="/products/list"><AiOutlineGift size='22px'/> 상품리스트 페이지</StyeldLink>
              <StyeldLink to="/bookmark" ><BsStar size='20px'/>북마크 페이지</StyeldLink>
            </Menus>
        </DropdownContainer>
    );
}
