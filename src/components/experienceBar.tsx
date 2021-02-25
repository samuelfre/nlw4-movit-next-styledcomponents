import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
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
  width: 50%;
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;


const DivContainer = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

const SpanTXT = styled.span`
   left: 50%;
   position: absolute;
   top: 12px;
   transform: translateX(-50%);
  
`;

export function ExperienceBar() {
   return (
      <DivContainer>
         <Header>
            <Span>0 xp</Span>
            <Div>
               <DivPercent />
               <SpanTXT>300 xp</SpanTXT>
            </Div>
            <Span>600 xp</Span>
         </Header>
      </DivContainer>
   )

}