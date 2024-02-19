// import {  ProductTitle } from "@/shared/types";

import { BasketItem} from "@/redux/basket/types";



export const getBorderColor = ( title: string) : string => {
    switch (title ) {
        case "Для салата":
            return 'border-salat-50';
            break;
        case "Італійське":
            return 'border-italian-50';
            break;
        case 'Для м\'яса':
            return 'border-meet-50';
            break;
        case "Східне":
            return 'border-orange-50';
            break;
        default:
            return 'border-red-100';
    }
}

export const getTextColor = (title: string) : string => {
    switch (title) {
        case "Для салата":
            return 'text-salat-50';
            break;
        case "Італійське":
            return 'text-italian-50';
            break;
        case 'Для м\'яса':
            return 'text-meet-50';
            break;
        case "Східне":
            return 'text-orange-50';
            break;
        default:
            return 'text-red-100';
    }
}

export const calculateProductItems = (basketItems: BasketItem[]): number => {
    return basketItems.reduce((total: number, item: BasketItem) => total + item.quantity, 0);
};


