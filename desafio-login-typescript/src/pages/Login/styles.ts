import bgImage from '../../assets/bg-image.jpg';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div `
    max-width: 360px;
    width: 100%;
    padding: 2rem 1.5rem;
    background-color: #191970;
    border-radius: .6rem;
    opacity: .9;

    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Title = styled.h2 `
    font-size: 1.4rem;
    color: #6495ED;
    text-align: left;
    margin-bottom: 1rem;

    &:hover {
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
`