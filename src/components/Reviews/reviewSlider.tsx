import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { SliderArrows } from "../Offers/SliderArrows";


export const ReviewSlider: React.FC = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1366 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1365, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (

        <div className=' mx-auto relative mt-10 '>
            <Carousel responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500}
                customTransition="transform 1500ms ease-in-out"
                transitionDuration={2000}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<SliderArrows />}
            >
           
                <div className=' border border-green-500 p-4 w-[300px] h-[100px]'>
                    <h3>User name 1 </h3>
                    <p className="border ">Review 1 </p>
                </div>
                <div className=' border border-green-500 p-4 w-[300px] h-[100px]'>
                    <h3>User name 2 </h3>
                    <p className=" border ">Review 2 </p>
                </div>
                <div className=' border border-green-500 p-4 w-[300px] h-[100px]'>
                    <h3>User name 3 </h3>
                    <p className="border ">Review 3 </p>
                </div>
                <div className=' border border-green-500 p-4 w-[300px] h-[100px]'>
                    <h3>User name 4 </h3>
                    <p className="border ">Review 4 </p>
                </div>
           
            </Carousel>
        </div>
    
    )

}