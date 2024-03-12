import { useEffect, useState } from "react";


type UkrPostProps = {
    setDeliveryAddress: (value: string)=> void;
}
export const UkrPost: React.FC<UkrPostProps> = ({  setDeliveryAddress }) => {
    const [index, setIndex] = useState<string>('');
    const [cityName, setCityName] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [house, setHouse] = useState<string>('');
    const [apartment, setApartment] = useState<string>('')



    const handleNovaPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'index':
                setIndex(e.target.value);
                break;
            case 'cityName':
                setCityName(e.target.value);
                break;
            case 'street':
                setStreet(e.target.value);
                break;
            case 'house':
                setHouse(e.target.value);
                break;
            case 'apartment':
                setApartment(e.target.value);
                break;
            default:
                return
        }
    }

    useEffect(() => {
        if (index && cityName && street && house && apartment) {
            setDeliveryAddress(`${index}, ${cityName}, ${street}, ${house}, ${apartment}`);
        }
    }, [index, cityName, street, house, apartment, setDeliveryAddress]);
    
    return (
        <div className=" flex flex-wrap w-[360px] gap-4  mt-6">

            <input className=" sm:w-[127px] border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="index"
                placeholder="Індекс"
                autoComplete="off"
                value={index}
                onChange={handleNovaPostChange}
            />
            <input className=" sm:w-[217px] border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="cityName"
                placeholder="Місто"
                autoComplete="off"
                value={cityName}
                onChange={handleNovaPostChange}
            />

            <input className=" sm:w-[217px] border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="street"
                placeholder="Вулиця"
                autoComplete="off"
                value={street}
                onChange={handleNovaPostChange}
            />
            <input className="sm:w-[127px] border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="house"
                placeholder="Будинок"
                autoComplete="off"
                value={house}
                onChange={handleNovaPostChange}
            />
            <input className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="apartment"
                placeholder="Додатково (під'їзд, квартира)"
                autoComplete="off"
                value={apartment}
                onChange={handleNovaPostChange}
            />
        </div>
    )
}