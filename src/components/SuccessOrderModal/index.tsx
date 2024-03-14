import { Modal } from "../Modal";
import { SuccessMessage } from "./SuccessOrderModal";

type SuccessModalProps = {
    closeModal: () => void;
    
 
  };
  
  
  export const SuccessOrderModal: React.FC<SuccessModalProps> = ({ closeModal }) => {
    return (
      <Modal closeModal={closeModal}>
     <SuccessMessage
     
      />
      </Modal>
    )
  };