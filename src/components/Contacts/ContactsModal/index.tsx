import { Modal } from "@/components/Modal";
import { ContactForm } from "./ContactForm";

type ContactModalProps = {
    closeModal: () => void;
  };
  
  export const ContactModal: React.FC<ContactModalProps> = ({ closeModal }) => {
    return (
      <Modal closeModal={closeModal}>
           <p className="font-amaticSC tracking-widest font-bold xs:text-base  sm:text-2xl  text-salat-30 -mt-6" >Напишіть нам</p> 
        <ContactForm closeModal={closeModal}/>
      </Modal>
    )
  };