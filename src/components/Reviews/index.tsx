
import { IoIosAddCircleOutline } from "react-icons/io";
import { ReviewSlider } from "./reviewSlider"
import { ReviewModal } from "../ReviewModal";
import { useContext } from "react";
import { ModalContext } from "../ModalContext";
// import { PlusCircleIcon } from "@heroicons/react/20/outline;
// import { PlusCircleIcon } from "@heroicons/react/24/solid";

export const Reviews = () => {
  const { showModal, toggleModal } = useContext(ModalContext);



  return (
    <section id='відгуки' className=" -mt-10  px-[46px] sm:px-10 md:px-[46px]  m-auto   ">
      <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center"> Відгуки</h2>
      <div className="  w-full h-[280px] " >
        <ReviewSlider />
      </div>
       <button type="button" className="flex justify-end  button-position relative rounded-full  w-[50px] h-[50px] bg-salat-5a" onClick={toggleModal}>
        <IoIosAddCircleOutline className="text-salat-50 text-[55px]  absolute -top-2 left-2 "/>
      </button>
      {showModal && <ReviewModal closeModal={toggleModal} />}
    </section>
  )
}