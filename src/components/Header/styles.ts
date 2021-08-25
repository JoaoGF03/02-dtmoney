import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);

  button {
    background: var(--light-blue)
  }
`

export const Content = styled.div`
  max-width:1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  /* I want the logo and button to be align with the center */
  display: flex;  
  align-items: center; 
  /* I want a space between the logo and the button, if there was more content it would be spaced equally */
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem; 
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter .2s;

    &:hover{
      filter: brightness(0.9)
    }
  }
`