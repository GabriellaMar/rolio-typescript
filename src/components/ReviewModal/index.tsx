// import React from 'react'

import { Modal } from "../Modal";
import { AddReviewForm } from "./AddReviewForm";



type ReviewModalProps = {
  closeModal: () => void;
//   initialUserName?: string;
//   initialComment?: string;
};


export const ReviewModal: React.FC<ReviewModalProps> = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
         <p className="font-amaticSC tracking-widest font-bold xs:text-base  sm:text-lg  text-salat-50 -mt-6" >Напишіть нам</p> 
      <AddReviewForm 
      // initialUserName={initialUserName} 
      // initialComment={initialComment} 
      />
      {/* <button type="button" className="block  px-6 py-2 mt-4 ml-auto mr-8" >
        <TrashIcon className="h-8 w-8 text-salat-50 clear-hover " />
      </button> */}
    </Modal>
  )
};