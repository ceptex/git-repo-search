import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;


export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 15vw;
  border: 1px solid #ddd;
  height: 30px;
  padding: 1px;
  padding-left: 10px;
  border-radius: 5px 0 0 5px;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  width: 5vw;
  height: 34px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 5px 5px 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 14px;
  color: red;
  font-weight: 600;
  margin-top: 20px;
`