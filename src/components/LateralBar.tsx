import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  /* ... */
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));
  height: 100vh;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-crop{
    width: 3rem;
    height: 2.6rem;
  }
  .home{
    width: 4.5rem;
    height: 3.5rem;
  }
  .ranking{
    width: 4.5rem;
    height: 3.5rem;
    background-color: red;
  }

`;


export default function LateralBar() {
  return (
    <Div>
      <div>
        <img className='logo-crop' src="logo-crop.svg"/>
      </div>
      <div>
        <img className='home' src="home.svg"/>
      </div>
      <div>
        <img className='ranking' src="ranking.svg"/>
      </div>
      
    </Div>
  )
}
