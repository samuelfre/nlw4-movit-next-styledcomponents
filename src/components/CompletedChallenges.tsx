import { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../contexts/ChallengesContext';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.5rem 0;
  padding-bottom: 1px solid #d3d8da;
  font-weight: 500;
`;

const SpanLeft = styled.span`
  font-size: 1.25rem;
`;
const SpanRigth = styled.span`
  font-size: 1.5rem;
`;


export function CompletedChallenge() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return(
    <Div>
      <SpanLeft>Desafios completos</SpanLeft>
      <SpanRigth>{challengesCompleted}</SpanRigth>
    </Div>
  );
}