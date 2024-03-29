
import { BasketItem} from "@/redux/basket/types";

export const getBorderColor = ( title: string) : string => {
    switch (title ) {
        case "Для салату":
            return 'border-salat-50';
            break;
        case "Італійська":
            return 'border-italian-50';
            break;
        case 'Для м\'яса':
            return 'border-meet-50';
            break;
        case "Східна":
            return 'border-orange-50';
            break;
        default:
            return 'border-red-100';
    }
}

export const getTextColor = (title: string) : string => {
    switch (title) {
        case "Для салату":
            return 'text-salat-50';
            break;
        case "Італійська":
            return 'text-italian-50';
            break;
        case 'Для м\'яса':
            return 'text-meet-50';
            break;
        case "Східна":
            return 'text-orange-50';
            break;
        default:
            return 'text-red-100';
    }
}

export const getCategoriesBorderColor = ( title: string) : string => {
    switch (title ) {
        case "Для салату":
            return 'border-salat-10 ';
            break;
        case "Італійська":
            return 'border-italian-5' ;
            break;
        case 'Для м\'яса':
            return 'border-meet-10 ';
            break;
        case "Східна":
            return 'border-orange-10 ';
            break;
        default:
            return 'border-red-100';
    }
}

export const getCategoriesBgColor = ( title: string) : string => {
    switch (title ) {
        case "Для салату":
            return ' bg-salat-10';
            break;
        case "Італійська":
            return ' bg-italian-10';
            break;
        case 'Для м\'яса':
            return ' bg-meet-10';
            break;
        case "Східна":
            return ' bg-orange-10';
            break;
        default:
            return 'border-red-100';
    }
}


export const getBackgroundImage = (title: string) : string => {
    switch (title) {
        case "Для салату":
            return "before:content-tomatoes";
            break;
        case "Італійська":
            return "before:content-pasta";
            break;
        case 'Для м\'яса':
            return "before:content-meet";
            break;
        case "Східна":
            return "before:content-rise";
            break;
        default:
            return "before:content-tomatoes"; 
    }
};


export const getBigBackgroundImage = (title: string) : string => {
    switch (title) {
        case "Для салату":
            return "before:content-bigTomatoes";
            break;
        case "Італійська":
            return "before:content-bigPasta";
            break;
        case 'Для м\'яса':
            return "before:content-bigMeet";
            break;
        case "Східна":
            return "before:content-bigRise";
            break;
        default:
            return "before:content-bigTomatoes"; 
    }
};


export const calculateProductItems = (basketItems: BasketItem[]): number => {
    return basketItems.reduce((total: number, item: BasketItem) => total + item.quantity, 0);
};

export const calculateTotalPrice = (basketItems: BasketItem[]): number => {
    return basketItems.reduce((total: number, item: BasketItem) => total + item.quantity * item.price, 0);
};



