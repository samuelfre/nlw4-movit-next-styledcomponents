import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../contexts/ChallengesContext';

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);
`;
const Div = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.0 5);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
`;
const Span = styled.span`
  flex: 1;
  border-left: 1px solid #f0f1f3;

`;
const Span1 = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;
const Span2 = styled.span`
  flex: 1;
  border-right: 1px solid #f0f1f3;
`;
const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;
  :hover{
    background: var(--blue-dark);
  }
`;
const ButtonLeave = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: var(--white);
  color: var(--title);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;
  :hover{
    background: var(--red);
  }
`;
const ButtonFinished = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: var(--white);
  color: var(--title);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;
  :disabled{
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
`;

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, sethasFinished] = useState(false);  
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  function startCountdown() {
    setisActive(true);
  }
  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setisActive(false);
    setTime(0.1 * 60);

  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      sethasFinished(true);
      setisActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <DivContainer>
        <Div>
          <Span2>{minuteLeft}</Span2>
          <Span>{minuteRight}</Span>
        </Div>
        <Span1>:</Span1>
        <Div>
          <Span2>{secondLeft}</Span2>
          <Span>{secondRight}</Span>
        </Div>
      </DivContainer>
      {hasFinished ? (
        <ButtonFinished disabled>Ciclo Encerrado</ButtonFinished>
      ) : (
          <>
            {
              isActive ? (
                <ButtonLeave
                  type="button"
                  onClick={resetCountdown}
                >Abandonar ciclo</ButtonLeave>
              ) : (
                  <Button
                    type="button"
                    onClick={startCountdown}
                  >Iniciar um ciclo</Button>
                )
            }
          </>
        )}

    </div>
  );
}