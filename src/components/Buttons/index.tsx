import { getBorderColor, getTextColor } from '@/services/services'
import { ProductColor} from '@/shared/types';

// type ProductTitle = keyof typeof ProductColor;


type ButtonProps = Partial<{
    text: string;
    title: string;
    size: number;
    padding: number;
    onClick: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
}>;






export const Buttons: React.FC<ButtonProps> = ({ text, size, title="Для салата", padding, onClick, onMouseEnter, onMouseLeave}) => {

     const productColor = ProductColor[title as keyof typeof ProductColor] || '';
    // const productColor = ProductColor[title] || '';
    return (
        <>
            <button
                type="button"
                className={` border  ${getBorderColor(title)}  rounded-[50px]  px-12 md:px-6  py-${padding}  xs:w-[280px] sm:w-[${size}px]  ${getTextColor(title)} uppercase hover-gradient hover:bg-gradient-to-r ${productColor} `}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {text}

            </button>
        </>
    )
}