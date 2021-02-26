import styled, { css } from 'styled-components';

interface PropsType{
  
}

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

const Button = styled.button`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: 0.2s;
  :hover{
    filter: brightness(0.9);
  }
  ${props => props.fail ? css`background: var(--red);` : css`background: var(--green);`}
`;


const InnerDiv = styled.div`
  /* ... */
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 600;
      font-size: 2rem;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    

  }

`;

const DivNotActive = styled.div`
  /* ... */
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }
  
  img {
    margin-bottom: 1rem;
  }
`;


export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <Div>
      {hasActiveChallenge ? (
        <InnerDiv>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <Button
              type="button"
              fail
            >Falhei</Button>
            <Button
              type="button"
            >Completei</Button>
          </footer>
        </InnerDiv>
      ) : (
          <DivNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
          Avance de level completando desafios.
        </p>
          </DivNotActive>
        )}
    </Div>
  );
}