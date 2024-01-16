import  { useState } from 'react'
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { getBorderColor } from '@/services/services';

type CounterProps = {
    title: string,
    marginTop: number,
    position: string,
};


export const ProductCounter = ({title, marginTop, position}: CounterProps) => {
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
            <button className="border p-2 sm:p-3 rounded-lg border-grey-10 cursor-pointer" onClick={subtractProduct}>
                <MinusIcon className="w-4 text-text-color" />
            </button>
            <p className={`text-end text-${getBorderColor(title)}`}> {increment} </p>
            <button className="border p-2 sm:p-3 rounded-lg border-grey-10 cursor-pointer" onClick={addProduct}>
                <PlusIcon className="w-4 text-text-color" />
            </button>
        </div>
    );
};