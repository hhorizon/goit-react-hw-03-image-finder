import { createPortal } from "react-dom";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
        <ModalBtn onClick={this.props.closeModal}>X</ModalBtn>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-height: 87vh;
  min-width: 600px;
  background-color: #fff;
  border-radius: 3px;
`;

const ModalBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 999;
`;
