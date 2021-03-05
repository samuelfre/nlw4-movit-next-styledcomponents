import React, { useState } from 'react'
import styled from 'styled-components';

const Div = styled.div`
  /* ... */
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  height: 100vh;
  width: 7rem;

  .div{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .logo-crop{
    width: 3rem;
    height: 2.6rem;
  }
  .home{
    width: 2rem;
    height: 2rem;
  }
  .ranking{
    width: 2rem;
    height: 2rem;
  }
  .button{
    border: none;
    outline: none;    
    cursor: pointer;
    display: flex;    
    width: 100%;
    background: transparent;
    align-items: center;
    justify-content: center;
  }
  .button2{
    border: none;
    outline: none;    
    cursor: pointer;
    background: transparent;
  }
  .hover{
    position: absolute;
    left: 0;
    background: ${props => props.isSelected ? `var(--blue)` : 'transparent'};
    width: 0.25rem;
    height: 3.5rem;
  }  
  .hover1{
    position: absolute;
    left: 0;
    background: ${props => !props.isSelected ? `var(--blue)` : 'transparent'};
    width: 0.25rem;
    height: 3.5rem;
  }  
  
  .button:hover > .hover { 
    
      background: var(--blue); }

  .div1{
    margin-top: 17.3rem;    
    display: flex;
    flex-direction: column;
  }
  

`;


export default function LateralBar() {
  const [isSelected, setisSelected] = useState(true);
  return (
    <Div isSelected = {isSelected}>
      <div className="div">
        <button className="button2" >
          <img
            className='logo-crop'
            src="logo-crop.svg" />
        </button>
      </div>

      <div className="div1">
        <button className="button" onClick={() => setisSelected(true)}>
          <div className='hover' />
          <div>
            <img className='home' src={isSelected ? 'home-blue.svg' : 'home.svg'} />
          </div>
        </button>


        <div style={{ marginTop: '1.75rem' }}>
          <button className="button"  onClick={() => setisSelected(false)}>
            <div className='hover1' />
            <div>
              <img className='ranking' src={!isSelected ? 'ranking-blue.svg' : 'ranking.svg'} />
            </div>
          </button>

        </div>
      </div>

    </Div>
  )
}
