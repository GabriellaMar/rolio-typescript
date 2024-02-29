

import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import leftArrow from '@/assets/arrow_left.png';
import rightArrow from '@/assets/arrow_right.png';
import useMediaQuery from '@/hooks/useMediaQuery';

interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
  }

//  type ArrowsProps = {
//     next: ()=> void;
//     previous: ()=> void;
//  }

export const SliderArrows: React.FC <CarouselButtonGroupProps> = ({ next, previous }) => {

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className={`${isAboveSmallScreens ? `carousel-button-group flex gap-6  justify-between items-center w-full` : `hidden` } `}>
      <img src={leftArrow} onClick={() => previous?.()}/>
      <img src={rightArrow} onClick={() => next?.()}/>
    </div>
  )
}