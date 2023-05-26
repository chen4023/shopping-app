import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  width: 100vw;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position : absolute;
  bottom : 0;
    &:first-child {
        margin-top: 11px;
    }

    & span {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #888888;
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <span>개인정보 처리방침 | 이용 약관</span>
            <span>All rights reserved @ Codestates</span>
        </FooterContainer>
    );
}

