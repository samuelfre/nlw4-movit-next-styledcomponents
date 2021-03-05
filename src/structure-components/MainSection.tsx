import styled from 'styled-components';

const MainSection = styled.section`
   flex: 1;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 6.25rem;
   align-content: center;
   @media(max-width: 414px){
   grid-template-columns: 1fr;
  }
   
`;

export default MainSection;
