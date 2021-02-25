import styled from 'styled-components';

const Div = styled.div`
  /* ... */
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`;
const DivNotActive = styled.div`
  /* ... */
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Strong = styled.strong`
  /* ... */
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

const P = styled.p`
  /* ... */
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;
`;

const IMG = styled.img`
  /* ... */
  margin-bottom: 1rem;
`;


export function ChallengeBox() {
  return (
    <Div>
      <DivNotActive>
        <Strong>Finalize um ciclo para receber um desafio</Strong>
        <P>
          <IMG src="icons/level-up.svg" alt="Level up" />
          Avance de level completando desafios.
        </P>
      </DivNotActive>
    </Div>
  );
}