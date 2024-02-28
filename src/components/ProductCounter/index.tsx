
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { getTextColor } from '@/services/services';
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addBasketItemThunk, updateBasketItemThunk } from "@/redux/operations";
import { useContext } from "react";
import { IsHoveredContext } from "../Products/ProductCart";
import useMediaQuery from "@/hooks/useMediaQuery";



type CounterProps = {
    _id: string,
    title: string,
    marginTop: number,
    btnSize: number,
    fontSize: string,
    position: string,
    addedQuantity: number ,
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
};


export const ProductCounter: React.FC<CounterProps> = ({
    _id,
    addedQuantity,
    title,
    marginTop,
    btnSize,
    fontSize,
    position,
    handleMouseEnter,
    handleMouseLeave
}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const flexCenter = "flex items-center justify-center"
    const flexStart = "flex items-center justify-start"
    const isHovered = useContext(IsHoveredContext);
    const dispatch = useAppDispatch();


    const handleIncrement = () => {
        if (addedQuantity === 0) {
            dispatch(addBasketItemThunk({ _id, quantity: 1 }));
        } else {
            dispatch(updateBasketItemThunk({ id: _id, action: 'increment' }));
        }
    };


    const handleDecrement = () => {
        dispatch(updateBasketItemThunk({ id: _id, action: 'decrement' }));
    };

  
    return (
        <div className={`${isAboveMediumScreens ? flexStart : flexCenter}  gap-3 sm:gap-[25px] items-center mr-3 mt-${marginTop} ${position || ''}`}>
            <button className={` w-${btnSize}  h-${btnSize}  border  rounded-lg border-grey-10 clear-hover ${flexCenter} ${isHovered && 'clear-hover'}`}>
                <MinusIcon className="w-4 text-text-color" onClick={handleDecrement} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </button>
            <p className={`text-end text-${fontSize} ${getTextColor(title)}`}>
                {addedQuantity}
            </p>
            <button className={`border w-${btnSize}  h-${btnSize}  rounded-lg border-grey-10  clear-hover ${flexCenter}  ${isHovered && 'clear-hover'}`}  >
                <PlusIcon className={`w-4 text-text-color `} onClick={handleIncrement} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </button>
        </div>
    );
};