import React from 'react';
import Icon from './Icon';
import { ModalWrapper, ModalBody, ModalFooter, ModalHeader } from './ModalContent';


interface ModalProps {
  /**
   * Should the modal be shown?
   * @default false
   */
  isOpen?: boolean;
  /**
   * Optional close handler
   */
  onClose?: () => void;
  /**
   * Style of the icon
   *
   */
  styleIcon?: 'check' | 'error' | 'none';
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal message
   */
  message: string;
  /**
   * Modal button message
   */
  buttonMsg: string;
  /**
   * Icon color
   */
  iconColor?: string;
  /**
   * Button text color
   */
  btnTextColor?: string;
  /**
   * Button background color
   */
  btnBgColor?: string;
  /**
   * Bouton Border radius
   */
  btnBorderRadius?: "0px" | "5px" | "10px" | "15px" | "50px";
  /**
   * Modal border radius
   */
  modalBorderRadius?: "0px" | "5px" | "10px" | "15px" | "50px";
}

/**
 *  UI component for user interaction 
 */
const Modal = ({
  isOpen = false,
  styleIcon ,
  onClose = () => {},
  title,
  message,
  buttonMsg,
  iconColor,
  btnBgColor,
  btnTextColor,
  btnBorderRadius = "10px",
  modalBorderRadius = "15px",
}: ModalProps) => {
  return (
    
      <ModalWrapper isOpen={isOpen} onClose={onClose} modalBorderRadius={modalBorderRadius}>
        {styleIcon && <Icon styleIcon={styleIcon} iconColor={iconColor} />}
        {title && <ModalHeader title={title} />}
        <ModalBody message={message} />
      <ModalFooter onClose={onClose} buttonMsg={buttonMsg} btnTextColor={btnTextColor} btnBgColor={btnBgColor} borderRadius={btnBorderRadius} />       
      </ModalWrapper>
   
  );
};

export default Modal;