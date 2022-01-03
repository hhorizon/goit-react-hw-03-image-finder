import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  background-color: #fff;
  border-radius: 3px;
`;

const ModalBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;
  background-color: Transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.7);
  cursor: pointer;
  border-radius: 50%;
  height: 30px;
  width: 30px;

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

export { Overlay, ModalContent, ModalBtn };
