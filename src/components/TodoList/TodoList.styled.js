import styled from "styled-components";
export const Item = styled.li`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
export const Input = styled.input`
border-radius: 30px;
border: none;
margin-top: 10px;
padding: 10px;
`
export const Btn = styled.button`
border-radius: 30px;
border: none;
padding: 10px;
background-color: black;

&:hover{
    background-color: white;
    color: black;
    transition: 100ms;
}
`