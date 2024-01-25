import {  ProductTitle } from "@/shared/types";



export const getBorderColor = ( title: ProductTitle) : string => {
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

export const getTextColor = (title: ProductTitle) : string => {
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