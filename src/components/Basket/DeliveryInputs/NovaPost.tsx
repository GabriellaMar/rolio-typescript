import { useState } from "react"

export const NovaPost = () => {
    const [city, setCity] = useState<string>('');
    const [department, setDepartment] = useState<string>('')

    const handleNovaPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'city':
                setCity(e.target.value);
                break;
            case 'department':
                setDepartment(e.target.value);
                break;
            default:
                return
        }
    }
    return (
        <div className=" flex flex-col w-[360px] gap-4 mt-6">
            <input className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="city"
                placeholder="Місто"
                autoComplete="off"
                value={city}
                onChange={handleNovaPostChange}
            />
            <input className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name='department'
                placeholder="Номер відділення"
                autoComplete="off"
                value={department}
                onChange={handleNovaPostChange}
            />
        </div>
    )
}