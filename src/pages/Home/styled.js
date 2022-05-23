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

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #333;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 15vw;
  min-width: 90px;
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
  width: 80px;
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
  cursor: pointer;
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 14px;
  color: red;
  font-weight: 600;
  margin-top: 20px;
`;

export const Footer = styled.div`
position: fixed;
bottom: 0;
width: 100%;
height: 30px;
background-color: #000;
align-items: center;
text-align: right;
`;

export const Credit = styled.h3`
font-size: 14px;
color: #FFF;
margin-right: 20px;
`;