

// type Props = {}

import { ReviewSlider } from "./reviewSlider"

export const Reviews = () => {
  return (
    <section id='відгуки' className=" pt-10  px-5 sm:px-10 md:px-[46px]   m-auto">
    <div>
          <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center"> Відгуки</h2>
        <div className=" w-full h-[300px] border" >
        <ReviewSlider />
        </div>
    </div>
    </section>
  )
}