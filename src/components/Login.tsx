import { signin, signIn } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
   flex: 1;
   display: flex;
   flex-wrap: wrap;
   background-color: var(--blue);
   height: 100vh;
   /* gap: 3rem; */
/*
.fill {object-fit: fill;}
.contain {object-fit: contain;}
.cover {object-fit: cover;}
.scale-down {object-fit: scale-down;}
.none {object-fit: none;}
*/
    
   .left-section{
     /* font-size: 16px */
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     .image-fdp{
      width: 48rem;
      height: 41.3rem;        
      }
      @media(max-width: 1230px) {
      .image-fdp {
        width: 32rem;
        height: 27.5rem;
      }
    }
      @media(max-width: 912px) {
      .image-fdp {
        width: 19rem;
        height: 13.8rem;
      }
    }
   }

   .right-section{  
     flex: auto;  
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     .logoLogin{
        width:22.5rem;
        height:4.75rem;
        /* margin-top: 12.43rem;
        margin-right: 16.3rem; */
      }
      .txtBemVindo{
        margin-top: 7rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 2.87rem;
        color: #FFFFFF;
      }
      .divLoginContainer{ 
        display: flex;
        margin-top: 5.9rem;
        width: 22.5rem;
        height: 5.81rem;
        align-items: center;
        .divLogin{
          display: flex;
          width: 19.9rem;
          height: 3.8rem;
          align-items: center;
          .iconGit{
            width: 2.5rem;
            height: 2.5rem;
          }
          .txtLogin{
            margin-left: 1.5rem;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.9rem;
            color: #B3B9FF;
          }         
        }
        .btnLogin{
            border-radius: 0px 5px 5px 0px; 
            margin-left: 0.5rem;
            width: 4.5rem;
            height: 4.5rem;
            font-size: 1.75rem;
            background: #4953B8;
            border: none;
            outline: none;
            color: var(--white);
            transition: background-color 0.2s;
            :hover{
              background: var(--green);
            }
            :focus{
              border: none;
            }
          } 
        } 
        @media(max-width: 280px) {
        .divLoginContainer, .logoLogin{
          width: 15rem;
        }
      } 
   }
   @media(max-width: 800px) {
      .left-section, .right-section {
        flex: 100%;
        align-items: center;
      }
    }
`;

export function Login() {
  return (
    <StyledDiv>
      <div className='left-section'>
        <img className='image-fdp' src="Simbolo.svg" />
      </div>
      {
        //Divisor de Section
      }
      <div className='right-section'>
        <div>
          <div>
            <img
              className='logoLogin'
              src="logo-login.svg" />
          </div>
          <div
            className='txtBemVindo'>Bem-vindo</div>
          <div className='divLoginContainer'>
            <div className='divLogin'>
              <div>
                <img
                  className='iconGit'
                  src="img-github.svg" />
              </div>
              <div
                className='txtLogin'>
                Faça login com seu Github
                para começar</div>
            </div>
            <button
              className='btnLogin'
              type='button'
              onClick={() => signin('github')}> {'->'} </button>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}