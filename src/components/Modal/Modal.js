import { createPortal } from "react-dom";
import { Component } from "react";
import { VscClose } from "react-icons/vsc";
import { Overlay, ModalContent, ModalBtn } from "./Modal.styled";

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
        <ModalBtn onClick={this.props.closeModal}>
          <VscClose />
        </ModalBtn>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
