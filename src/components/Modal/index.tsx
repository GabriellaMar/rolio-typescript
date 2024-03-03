import { createPortal } from "react-dom";
import closeIcon from "@/assets/modal-close.png"
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

type ModalProps = {
  closeModal: () => void;

}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
const flexBetween = 'flex  justify-between items-cente';

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
      <div className=" xs:w-[280px] h-[529px] sm:w-[560px] sm:h-[552px] md:w-[630px] shadow-shadow/10 p-[56px] bg-white" >
        <div className={`${flexBetween}`}>
          <p>Напишіть нам</p>
          <button type="button" onClick={closeModal}>
            <img src={closeIcon} alt="Close button icon"></img>
          </button>
        </div>
        <form>
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
        </form>
      </div>
    </div>,
    modalRoot
  )
};