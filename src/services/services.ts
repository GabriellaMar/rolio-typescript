export const getBorderColor = (title: string): string => {
    switch (title) {
        case "Для салата":
            return 'salat-50';
        case "Італійське":
            return 'italian-50';
        case "Для м'яса":
            return 'meet-50';
        case "Східне":
            return 'orange-50';
        default:
            return 'border-red-100';
    }
}