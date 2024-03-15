
import { Modal } from "../Modal";
import { SuccessMessage } from "./SuccessOrderModal";


type SuccessModalProps = {
  closeModal: () => void;
  values: string;
};


export const SuccessOrderModal: React.FC<SuccessModalProps> = ({ closeModal, values }) => {

  return (
    <Modal closeModal={closeModal}>
      <SuccessMessage values={values} />
    </Modal>
  )
};