import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  background-color: #3b5998;
  z-index: 2;
  width: 100vw;
`;

const Form = styled.form`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  background-color: #fff;
  border: none;
  top: 4px;
  left: 4px;
  height: 28px;
  width: 28px;
  padding: 0;
  cursor: pointer;

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

const Input = styled.input`
  padding-left: 35px;
  height: 30px;
  width: 400px;
`;

export { Header, Form, Button, Input };
