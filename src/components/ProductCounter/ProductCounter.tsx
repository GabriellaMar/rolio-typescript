import  { useState } from 'react'
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import {  getTextColor } from '@/services/services';
import { ProductTitle } from '@/shared/types';


type CounterProps = {
    title: ProductTitle,
    marginTop: number,
    btnSize: number,
    fontSize: string,
    position: string,
};


export const ProductCounter: React.FC <CounterProps> = ({title, marginTop, btnSize,  fontSize, position}) => {
    const flexCenter = "flex items-center justify-center"
    const [increment, setIncrement] = useState<number>(0);

    const addProduct = (): void => {
        setIncrement(prevState => prevState + 1);
    };

    const subtractProduct = (): void => {
        if (increment > 0) {
            setIncrement(prevState => prevState - 1);
        }
    };

    return (
        <div className={`flex gap-[25px] items-center mt-${marginTop} ${position || ''}`}>
            <button className={` w-${btnSize}  h-${btnSize}  border  rounded-lg border-grey-10  ${flexCenter}`} onClick={subtractProduct}>
                <MinusIcon className="w-4 text-text-color" />
            </button>
            <p className={`text-end text-${fontSize} ${getTextColor(title)}`}> {increment} </p>
            <button className={`border w-${btnSize}  h-${btnSize}  rounded-lg border-grey-10  ${flexCenter}`} onClick={addProduct}>
                <PlusIcon className={` w-4 text-text-color `} />
            </button>
        </div>
    );
};