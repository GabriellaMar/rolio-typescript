import truck from '@/assets/delivery-truck.png';
import cash from '@/assets/cash.png';
import card from '@/assets/credit-card.png';
import house from '@/assets/house.png';
import coins from '@/assets/coins.png';
import box from '@/assets/box.png';

export const Delivery = () => {
  const flexCenter = 'flex justify-center items-center'
  return (
  <section id='доставкатаоплата' className=" pt-20 ">
    <div className='flex relative xs:flex-col-reverse sm:flex-row  items-center gap-8  after:z-[1]'>
<ul className='flex items-center xs:w-full sm:w-2/3 h-[110px]  xs:justify-center  sm:justify-end  gap-16 bg-salat-60 p-6'>
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
</div>

<div className='flex relative xs:flex-col  sm:flex-row  items-center justify-end gap-8  after:z-[1] mt-16'>
<p className='  before:absolute before:z-[1] before:content-olives sm:before:content-bigOlives before:left-14 before:-top-24 font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center'> Оплата -</p>
<ul className='flex items-center xs:w-full sm:w-2/3 h-[110px]  xs:justify-center  sm:justify-start  gap-16 bg-salat-60 p-6 '>
<li className=' '> 
  <img src={truck} alt='Delivery truck icon' className=' m-auto' /> 
  <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color mt-2'>Нова пошта</p></li>
<li>
<img src={box} alt='Box icon' className=' m-auto' />
  <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Укрпошта</p>
</li>
<li>
<img src={house} alt='House icon' className=' m-auto' />
<p className=' text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Самовивіз</p>
</li>
</ul>

</div>

      {/* <div className={` relative flex    w-2/3 items-center flex-col sm:flex-row-reverse gap-[30px] sm:justify-end  md:ml-0 pt-16`}>
          {/* <div className=" flex flex-col-reverse sm:flex-row gap-8 items-center after:absolute after:-top-0 sm:after:top-0 after:-right-0   after:z-[1] after:content-herbs sm:after:content-bigHerbs"> */}
           {/* <div className="relative"> */}
            {/* <div className="after:absolute after:-top-10 sm:after:top-0 after:-right-28  sm:after:left-24  after:z-[1] after:content-herbs sm:after:content-bigHerbs"> */}
            {/* <p className=" font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center "> - Доставка</p>  */}
            {/* </div>
            {/* </div> */}
            {/* <div className=" ">
             <div className={` flex  items-center  gap-10 md:gap-12  bg-salat-60`}  >
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
          <p className=" font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center "> - Доставка</p> 
       </div>
      </div>   */}
    {/* <div className={` relative flex items-center  flex-col  gap-[30px] mt-10 sm:mt-20 sm:flex-row sm:justify-end  sm:m-auto sm:max-w-[768px] md:max-w-[1366px] md:mr-0`}>
      <div className=" flex flex-col-reverse sm:flex-row gap-8 items-center after:absolute after:-bottom-4 sm:after:bottom-10 after:right-24  sm:after:-left-8 after:z-[1] after:content-olives sm:after:content-bigOlives"> */}
          {/* <div className="relative"> */}
          {/* <div className="after:absolute after:-bottom-4 sm:after:bottom-10 after:right-24  sm:after:right-10 after:z-[1] after:content-olives sm:after:content-bigOlives"> */}
            {/* <p className=" font-amaticSC font-normal text-4xl text-text-color sm:text-5xl sx:text-center ">  Оплата - </p> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className={`  xs:w-full sm:w-[490px] md:w-[730px] h-[110px] bg-salat-60 ${flexCenter} md:justify-start gap-10 md:gap-12 md:pl-8 `}  >
            <div >
            <img src={coins} alt='Delivery truck icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color text-center mt-2'>Наложений <br/> платіж</p>
            </div>
            <div>
            <img src={card} alt='Box icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color  mt-2'>Приват 24</p>
            </div>
            <div>
            <img src={cash} alt='House icon' className=' m-auto' />
            <p className='text-2xs font-roboto font-light  sm:text-2m  text-text-color text-center mt-2'>Готівка <br/> при самовивозі</p>
            </div>
          </div> 
      </div>
    </div> */}
    {/* </div> */}
  </section>
  )
}