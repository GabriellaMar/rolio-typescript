
import { Review } from '@/redux/reviews/types';
import { Buttons } from '../../Buttons'
import { TrashIcon } from "@heroicons/react/24/outline"
import { SyntheticEvent, useState } from 'react';
import { addReviewsThunk } from '@/redux/operations';
import { useAppDispatch } from '@/hooks/useAppDispatch';


type AddReviewFormProps = {
  closeModal: () => void;
};


export const AddReviewForm: React.FC<AddReviewFormProps> = ({ closeModal }) => {
  const [userName, setUserName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'userName':
        setUserName(e.target.value);
        break;
      case 'comment':
        setComment(e.target.value);
        break;
      default:
        return
    }
  }


  const handleReviewSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const review: Review = {
      userName,
      comment,
    };

    dispatch(addReviewsThunk(review));
    closeModal()
  }

  const resetForm = () => {
    setUserName('');
    setComment('');
  }

  return (
    <form className='relative mt-3' onSubmit={handleReviewSubmit}>
      <label className="font-roboto  text-base text-text-color font-normal"> Ваше ім'я
        <input className="border rounded border-light-grey-10 px-4 py-2 w-full  mt-2 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
          type='text'
          name="userName"
          value={userName}
          onChange={handleReviewChange}
          placeholder="Ваше ім'я"
        />
      </label>
      <textarea className="border rounded border-light-grey-10 px-4 py-2 w-full xs:h-48 sm:h-60  mt-5 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
        //  type='text'
        name="comment"
        placeholder="Ваш коментар"
        value={comment}
        onChange={handleReviewChange}
      >
      </textarea>
      <div className=' before:absolute flex justify-end xs:gep-4 sm:gap-20 items-center mt-4 xs:before:content-smallOilCap sm:before:content-mediumOilCap md:before:content-largeOilCap before:-bottom-10 before:-left-6 xs:before:-bottom-[100px] xs:before:-left-2'>
        <Buttons title={"Для салату"} text="Відправити" size={200} padding={2} type={"submit"} />
        <button type="button" className=" " onClick={resetForm}>
          <TrashIcon className=" xs:absolute -bottom-20 right-1 h-8 w-8 text-salat-50 clear-hover " />
        </button>
      </div>
    </form>
  )
}