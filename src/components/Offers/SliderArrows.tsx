
import { SlArrowRight, SlArrowLeft} from "react-icons/sl";
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';

interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
  }

//  type ArrowsProps = {
//     next: ()=> void;
//     previous: ()=> void;
//  }

export const SliderArrows: React.FC <CarouselButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="carousel-button-group  gap-6 flex justify-between 
    items-center w-full">
         <SlArrowLeft size={42} color='gray' onClick={() => previous?.()}/>
        <SlArrowRight  size={42} color='gray'onClick={() => next?.()} />
    </div>
  )
}