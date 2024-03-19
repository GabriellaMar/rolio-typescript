
import { IoIosAddCircleOutline } from "react-icons/io";
import { ReviewSlider } from "./reviewSlider"
import { ReviewModal } from "./ReviewModal";
import { useContext } from "react";
import { ModalContext } from "../ModalContext";


export const Reviews = () => {
  const { showModal, toggleModal } = useContext(ModalContext);

  return (
    <section id='відгуки' className=" bg-white-review sm:-mt-10 xs:px-5  sm:px-10 md:px-[46px]  py-10  ">
      <h2 className=" font-amaticSC font-normal text-4xl sm:text-5xl text-text-color md:font-bold text-center"> Відгуки</h2>
      <div className="  w-full h-[280px] " >
        <ReviewSlider />
      </div>
      <button type="button" className="flex justify-end  button-position relative btn-square  w-12 h-12 bg-salat-5a clear-hover xs:mt-12 mt-2 mr-4 animate-[bounce_2s_ease-in-out_infinite]" onClick={toggleModal}>
        <IoIosAddCircleOutline className="text-salat-50 text-[55px]  absolute -top-2 left-2 " />
      </button>
      {showModal && <ReviewModal closeModal={toggleModal} />}
    </section>
  )
}