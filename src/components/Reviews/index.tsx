
import { IoIosAddCircleOutline } from "react-icons/io";
import { ReviewSlider } from "./reviewSlider"
import { ReviewModal } from "../ReviewModal";
import { useContext } from "react";
import { ModalContext } from "../ModalContext";


export const Reviews = () => {
  const { showModal, toggleModal } = useContext(ModalContext);


  return (
    <section id='відгуки' className=" -mt-10   sm:px-12 md:px-[46px]  pb-20  ">
      <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center"> Відгуки</h2>
      <div className="  w-full h-[280px] " >
        <ReviewSlider />
      </div>
      <button type="button" className="flex justify-end  button-position relative rounded-full  w-[50px] h-[50px] bg-salat-5a clear-hover  mt-2 mr-4" onClick={toggleModal}>
        <IoIosAddCircleOutline className="text-salat-50 text-[55px]  absolute -top-2 left-2 " />
      </button>
      {showModal && <ReviewModal closeModal={toggleModal} />}
    </section>
  )
}