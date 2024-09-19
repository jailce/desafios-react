import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #6495ED;

    display: flex;
    flex-direction: column;
    align-items: left;
`

export const Label = styled.label `
    font-size: 1.2rem;
    color: #6495ED;
    margin: .8rem 0 .4rem 0;
`

export const InputText = styled.input `
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    color: #FFFFFF;
    background-color: transparent;
    border: 0;

    &::placeholder {
        color: #87CEEB;
        opacity: .7;
    }
`

export const ErrorText = styled.p `
    color: #DC143C;
    font-size: .8rem;
    margin-top: 5px;
`