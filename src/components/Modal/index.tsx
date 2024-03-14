import { createPortal } from "react-dom";
import closeIcon from "@/assets/modal-close.png"
import {  useEffect } from "react";


const modalRoot = document.querySelector('#modal-root') as HTMLElement;

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;


}

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  // const flexBetween = 'flex  justify-between items-center';

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
      <div className=" xs:w-[280px] h-[529px] sm:w-[560px] sm:h-[552px] md:w-[630px] shadow-shadow/10 xs:px-5 sm:p-[46px] bg-white" >
        {/* <div className={`${flexBetween}`}> */}
          {/* <p className="font-amaticSC tracking-widest font-bold xs:text-base  sm:text-lg  text-salat-50 " >Напишіть нам</p> */}
          <button type="button" onClick={closeModal} className="block ml-auto">
            <img src={closeIcon} alt="Close button icon"/>
          </button>
        {/* </div> */}
        {children}
        {/* <form>
          <label > Ваше ім'я
            <input type='text'
              name="name"
              placeholder="Введіть ім'я"
              className="w-full h-[10px] py-3 px-4 border"
            />
          </label>
          <textarea
            placeholder="Ваш коментарій"
            className="w-full h-1/2 py-3 px-4 border mt-5"></textarea>
        </form> */}
   
      </div>
    </div>,
    modalRoot
  )
};