import styled from "styled-components";

const Heading = styled.h1`
  font-size: 40px;
  color: green;
`;

function Home() {
  return <Heading>Hello world!</Heading>;
}

export default Home;