import { getBorderColor, getTextColor } from '@/services/services'
import { ProductColor } from '@/shared/types';

type ButtonType = "button" | "submit" | "reset";

type ButtonProps = Partial<{
    text: string;
    title: string;
    size: number;
    padding: number;
    type: ButtonType;
    onClick: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
}>;



export const Buttons: React.FC<ButtonProps> = ({ text, type, size, title = "Для салата", padding, onClick, onMouseEnter, onMouseLeave }) => {

    const productColor = ProductColor[title as keyof typeof ProductColor] || '';
    return (
        <>
            <button
                type={type}
                className={` border  ${getBorderColor(title)}  rounded-[50px] xs:px-8  sm:px-12 md:px-6  py-${padding}  xs:w-[280px] sm:w-[${size}px]  ${getTextColor(title)} uppercase hover-gradient hover:bg-gradient-to-r ${productColor} `}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {text}

            </button>
        </>
    )
}