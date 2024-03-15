import { Modal } from "../Modal";
import { AddReviewForm } from "./AddReviewForm";

type ReviewModalProps = {
  closeModal: () => void;
};


export const ReviewModal: React.FC<ReviewModalProps> = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
         <p className="font-amaticSC tracking-widest font-bold xs:text-base  sm:text-2xl  text-salat-30 -mt-6" >Залишіть коментар</p> 
      <AddReviewForm />
    </Modal>
  )
};