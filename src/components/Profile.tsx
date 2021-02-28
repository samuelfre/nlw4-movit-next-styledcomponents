import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../contexts/ChallengesContext';

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const IMG = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 58%;
`;
const IMGLEVEL = styled.img`
  margin-right: 0.5rem;
`;

const DivTXT = styled.div`
  margin-left: 1.5rem;
`;

const Strong = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--title);
`;

const P = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;

`;



export function Profile() {
  const { level } = useContext(ChallengesContext);
   return (
      <Div>
         <IMG src="https://github.com/samuelfre.png" alt="Samuel Henrique" />
         <DivTXT>
            <Strong>Samuel Henrique</Strong>
            <P>
              <IMGLEVEL src="icons/level.svg" alt="Level"/>
              Level {level}</P>
         </DivTXT>
      </Div>
   );
}