import truck from '@/assets/delivery-truck.png';
import cash from '@/assets/cash.png';
import card from '@/assets/credit-card.png';
import house from '@/assets/house.png';
import coins from '@/assets/coins.png';
import box from '@/assets/box.png';
import { motion } from "framer-motion";

export const Delivery = () => {
  // const flexCenter = 'flex justify-center items-center'

  
  return (
    <section id='доставкатаоплата' className=" xs:pt-6 sm:pt-20 ">
      <motion.div className='flex relative xs:flex-col-reverse sm:flex-row  items-center gap-8  after:z-[1]'
       initial='hidden'
       whileInView='visible'
       viewport={{once: true, amount: 0.5}}
       transition={{duration: 1,}}
       variants={{
        hidden: {opacity: 0, x: 20},
        visible: {opacity: 1, x: 0},
       }}
      >
        <ul className='flex items-center xs:w-full sm:w-2/3   xs:justify-center  sm:justify-end  gap-16 bg-salat-60 p-6'>
          <li className=' '>
            <img src={truck} alt='Delivery truck icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color mt-2'>Нова пошта</p></li>
          <li>
            <img src={box} alt='Box icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Укрпошта</p>
          </li>
          <li>
            <img src={house} alt='House icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Самовивіз</p>
          </li>
        </ul>
        <p className=' after:absolute  after:content-herbs sm:after:content-bigHerbs after:right-14 after:top-10  after:z-[1] font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center'> - Доставка</p>
      </motion.div>

      <motion.div className='flex  relative xs:flex-col-reverse  sm:flex-row-reverse  items-center ml-auto gap-8  after:z-[1] xs:mt-10 sm:mt-16'
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 1,}}
        variants={{
           hidden: {opacity: 0, x: -20},
           visible: {opacity: 1, x: 0},
        }}
      >

        <ul className='flex items-center xs:w-full sm:w-2/3  xs:justify-center  sm:justify-start  gap-16 bg-salat-60 p-6 '>
          <li className=' '>
            <img src={coins} alt='Delivery truck icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color text-center mt-2'>Накладений <br /> платіж</p>
          </li>
          <li>
            <img src={card} alt='Box icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Приват 24</p>
          </li>
          <li>
            <img src={cash} alt='House icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color text-center mt-2'>Готівка <br /> при самовивозі</p>
          </li>
        </ul>
        <p className='  before:absolute before:z-[1] before:content-olives sm:before:content-bigOlives before:left-14  sm:before:-top-24 font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center'> Оплата -</p>
      </motion.div>


    </section>
  )
}