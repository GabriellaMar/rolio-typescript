import truck from '@/assets/delivery-truck.png';
import cash from '@/assets/cash.png';
import card from '@/assets/credit-card.png';
import house from '@/assets/house.png';
import coins from '@/assets/coins.png';
import box from '@/assets/box.png';

export const Delivery = () => {
  const flexCenter = 'flex justify-center items-center'
  return (
    <section id='доставкатаоплата' className=" pb-6  border">

      <div className={` flex items-center flex-col sm:flex-row-reverse gap-[30px] sm:justify-end max-w-[768px] md:max-w-[1366px] m-auto`}>
        <div className="relative">
          <div className="after:absolute after:-top-10 sm:after:top-0 after:-right-28 after:z-[1] after:content-herbs sm:after:content-bigHerbs">
            <p className=" font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center "> - Доставка</p>
          </div>
        </div>
        <div className={`  xs:w-full sm:w-[490px] md:w-[730px] h-[100px] bg-salat-60 ${flexCenter} gap-10 `}  >
          <div >
            <img src={truck} alt='Delivery truck icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color mt-2'>Нова пошта</p>
          </div>
          <div>
            <img src={box} alt='Box icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Укрпошта</p>
          </div>
          <div>
            <img src={house} alt='House icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Самовивіз</p>
          </div>
        </div>
      </div>
      <div className={` flex items-center  flex-col  gap-[30px] mt-10 sm:mt-20 sm:flex-row sm:justify-end  max-w-[768px] md:max-w-[1366px] m-auto`}>
        <div className="relative">
          <div className="after:absolute after:-bottom-4 sm:after:bottom-10 after:right-24  sm:after:right-10 after:z-[1] after:content-olives sm:after:content-bigOlives">
            <p className=" font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center ">  Оплата - </p>
          </div>
        </div>
        <div className={`  xs:w-full sm:w-[490px] md:w-[730px] h-[100px] bg-salat-60 ${flexCenter} gap-10 `}  >
          <div >
            <img src={coins} alt='Delivery truck icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color mt-2'>Нова пошта</p>
          </div>
          <div>
            <img src={card} alt='Box icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Укрпошта</p>
          </div>
          <div>
            <img src={cash} alt='House icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Самовивіз</p>
          </div>
        </div>
      </div>
    </section>
  )
}