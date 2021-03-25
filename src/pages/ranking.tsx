import React from 'react'
import LateralBar from '../components/LateralBar'
import styled from 'styled-components';

interface IFlex{
  flex: number;
}

const Span = styled.span`
  margin-top: 2.5rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.9rem;
  color: #2E384D;
`;

const Div0 = styled.div`
  /* ... */
  height: 100vh;
  flex-direction: column;
  display: flex;
  margin-left: 10.5rem;
  max-width: 62rem;
`;
const Div = styled.div`
  /* ... */
  display: flex;
  margin-top: 2.5rem;
  flex-direction: row;
  height: 1.1rem;
  width: 57.2rem;
`;

const Div1 = styled.div`
  /* ... */
  flex: ${(props: IFlex) => props.flex };
  height: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  color: #666666;
  opacity: 0.5;
`;


export default function Ranking() {
  return (
    <div style={{display: 'flex'}}>
      <LateralBar />
      <Div0>
        <Span>Leaderboard</Span>
        <Div>
          <Div1 flex={0.5}>POSIÇÃO</Div1>
          <Div1 flex={2}>USUÁRIO</Div1>
          <Div1 flex={1}>DESAFIOS</Div1>
          <Div1 flex={1}>EXPERIÊNCIA</Div1>
        </Div>
      </Div0>
    </div>
  )
}
