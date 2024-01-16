import { getBorderColor } from '@/services/services'
import { ProductColor } from '@/shared/types';


type Props = {
    title: string,
    text: string,
    size: number,
    padding?: number,
    onClick?: () => void,
    onMouseLeave: () => void,
    onMouseEnter: () => void,


}



export const Buttons = ({ text, size, title, padding, onClick, onMouseEnter, onMouseLeave}: Props) => {

    const productColor = ProductColor[title] || 'gray';
    return (
        <>
            <button
                type="button"
                className={` border border-${getBorderColor(title)}  rounded-[50px]  px-12  py-${padding} min-w-full sm:min-w-[${size}px] text-${getBorderColor(title)} uppercase hover-gradient hover:bg-gradient-to-r ${productColor} `}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}

            >
                {text}

            </button>
        </>
    )
}