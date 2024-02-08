
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import {  getTextColor } from '@/services/services';




type CounterProps = {
    // id: string,
    title: string,
    marginTop: number,
    btnSize: number,
    fontSize: string,
    position: string,
    addedQuantity: number,
};


export const ProductCounter: React.FC <CounterProps> = ({ addedQuantity, title, marginTop, btnSize,  fontSize, position, 
    //  addProduct, add, remove
    }) => {
    const flexCenter = "flex items-center justify-center"

    // const basketItem = useSelector(selectBasketItemById(id));
  
 
    // const addedQuantity = basketItem ? basketItem.quantity : 0;

    return (
        <div className={`flex gap-[25px] items-center mt-${marginTop} ${position || ''}`}>
            <button className={` w-${btnSize}  h-${btnSize}  border  rounded-lg border-grey-10  ${flexCenter}`}
            //  onClick={remove}
             >
                <MinusIcon className="w-4 text-text-color" />
            </button>
            <p className={`text-end text-${fontSize} ${getTextColor(title)}`}>
          
                {addedQuantity}
                </p>
            <button className={`border w-${btnSize}  h-${btnSize}  rounded-lg border-grey-10  ${flexCenter}`} 
            // onClick={add}
            >
                <PlusIcon className={` w-4 text-text-color `} />
            </button>
        </div>
    );
};