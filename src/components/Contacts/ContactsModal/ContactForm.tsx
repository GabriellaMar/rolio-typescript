import { Buttons } from "@/components/Buttons";
import { SyntheticEvent, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline"

type ContactFormProps = {
  closeModal: () => void;
};


export const ContactForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  const [userName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');



  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'userName':
        setUserName(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        return
    }
  }


  const handleMessageSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const contactMessage = {
      userName,
      phone,
      message,
    };

    console.log(contactMessage)
    closeModal()
  }

  const resetForm = () => {
    setUserName('');
    setMessage('');
    setPhone('');
  }

  return (

    <form className='relative xs:mt-1 sm::mt-3' onSubmit={handleMessageSubmit}>
      <label className="font-roboto  text-base text-text-color font-normal"> Ваше ім'я
        <input className="border rounded border-light-grey-10 px-4 py-1 w-full  mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10 xs:mb-3 sm:mb-3"
          type='text'
          name="userName"
          value={userName}
          onChange={handleMessageChange}
          placeholder="Ваше ім'я"
        />
      </label>
      <label className="font-roboto  text-base text-text-color font-normal "> Ваше номер телефону
        <input className="border rounded border-light-grey-10 px-4 py-1 w-full  mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
          type='phone'
          name="phone"
          value={phone}
          onChange={handleMessageChange}
          placeholder="+380"
        />
      </label>
      <textarea className="border rounded border-light-grey-10 px-4 py-1 w-full xs:h-40   mt-4 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
        name="message"
        placeholder="Ваше повідомлення"
        value={message}
        onChange={handleMessageChange}
      >
      </textarea>
      <div className=' before:absolute flex justify-center  mt-4 xs:before:content-olives xs:before:-rotate-12 xs:before:-bottom-[67px] xs:before:-left-3  sm:before:content-mediumOilCap md:before:content-largeOilCap sm:before:-bottom-18 sm:before:-left-4 md:before:-bottom-[76px]'>
        <Buttons title={"Для салату"} text="Відправити" size={200} padding={2} type={"submit"} />

      </div>
      <button type="button" className=" " onClick={resetForm}>
        <TrashIcon className=" xs:absolute -bottom-10 right-1 h-8 w-8 text-salat-50 clear-hover " />
      </button>
    </form>
  )
}