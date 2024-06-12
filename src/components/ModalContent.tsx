import React from "react";
import Icon from "./Icon";
import styles from './modal.module.css'

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
    children: React.ReactNode;
    modalBorderRadius?: string;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onClose, children , modalBorderRadius }) => {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
  return (
    <div className={`${styles.modal} ${isOpen ? styles.modalShow : ''}`} onClick={handleBackgroundClick} >
      <div className={styles.modalContent} style={{borderRadius: modalBorderRadius}}>{children}</div>
    </div>
  );
};

export const ModalHeader: React.FC<{ title: string }> = ({ title }) => (
  <h3>{title}</h3>
);

export const ModalBody: React.FC<{ message: string }> = ({ message }) => (
  <p>{message}</p>
);

export const ModalFooter: React.FC<{
  onClose: () => void;
  buttonMsg: string;
  btnTextColor?: string;
    btnBgColor?: string;
  borderRadius?: string;
}> = ({ onClose, buttonMsg, btnTextColor, btnBgColor, borderRadius }) => (
  <button
    className={styles.btnClose}
    onClick={onClose}
    style={{ color: btnTextColor, backgroundColor: btnBgColor, borderRadius: borderRadius }}
  >
    {buttonMsg}
  </button>
);

export const ModalIcon: React.FC<{ styleIcon: "check" | "error" | "none"; iconColor?: string }> = ({
    styleIcon,
    iconColor,
}) => <Icon styleIcon={styleIcon} iconColor={iconColor} />;