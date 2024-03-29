import { createPortal } from "react-dom";
import closeIcon from "@/assets/modal-close.png"
import {  useEffect } from "react";


const modalRoot = document.querySelector('#modal-root') as HTMLElement;

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
 
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);


  const handleBackdropClick = (event: React.SyntheticEvent<EventTarget>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };


  return createPortal(
    <div className=" backdrop-class backdrop-grayscale bg-black/60 " onClick={handleBackdropClick}>
      <div className=" xs:w-[280px] h-[529px] sm:w-[560px] sm:h-[552px] md:w-[630px] shadow-shadow/10 xs:px-5 xs:py-8 чsm:p-[46px] bg-white" >
          <button type="button" onClick={closeModal} className="block ml-auto clear-hover">
            <img src={closeIcon} alt="Close button icon"/>
          </button>
        {children}
      </div>
    </div>,
    modalRoot
  )
};