import { useContext, ReactNode } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../contexts/ChallengesContext';

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Span = styled.span`
  font-size: 1rem;
`;

const Div = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

const DivPercent = styled.div`
  width: ${(props: { width: ReactNode; }) => props.width};
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

const SpanTXT = styled.span`
   left: ${(props: { left: ReactNode; }) => props.left};
   position: absolute;
   top: 12px;
   transform: translateX(-50%);
  
`;

export function ExperienceBar() {
   const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
   const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);


   return (
      <Header>
         <Span>0 xp</Span>
         <Div>
            <DivPercent width={`${percentToNextLevel}%`} />
            <SpanTXT left={`${percentToNextLevel}%`}>{currentExperience === 0 ? null : `${percentToNextLevel}xp`}</SpanTXT>
         </Div>
         <Span>{experienceToNextLevel} xp</Span>
      </Header>
   )

}

//Dependência de cor, no global.tsx