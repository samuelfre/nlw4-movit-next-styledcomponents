import { signIn } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: var(--blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Section = styled.section`
  /* ... */
   flex: 1;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 6.25rem;
   align-content: center;
`;

const IMG = styled.img`
  /* ... */
  position: absolute;
  width: 53vw;
  height: 80vh;
  left: -68px;
  top: 80px;
  opacity: 99.92;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const IMG2 = styled.img`
  /* ... */
  width: 360px;
  height: 76px;
  opacity: 99.92;
`;

const Div2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  strong{
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    /* identical to box height, or 128% */
    color: var(--white);
  }
    
  `;


export function Login() {
  return (
    <Div>
      <Section>
        <div>
          <IMG src="logo-name.svg"/>
        </div>
        <Div2>
          <IMG2 src="logo-login.svg"/>
          <strong>Bem-vindo</strong>
          <div>
            <img src="img-github.svg"/>
            <div>Faça login com seu Github para começar</div>
          </div>
        </Div2>
      </Section>
    </Div>
  );
}