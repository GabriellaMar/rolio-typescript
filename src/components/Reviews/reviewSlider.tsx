import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { selectReviews } from "@/redux/reviews/selectors";
import { useSelector } from "react-redux";


export const ReviewSlider: React.FC = () => {
    const { reviews } = useSelector(selectReviews);

    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1366 },
            items: 2,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 1365, min: 768 },
            items: 1,
             slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (

        <div className=' mx-auto relative mt-10 pb-12'>
            <Carousel responsive={responsive}
                infinite={true}
                customTransition="transform 2500ms ease-in-out"
                transitionDuration={2500}
                arrows={false}
                showDots={true}
                renderDotsOutside
                swipeable
                sliderClass={" review-list react-multi-carousel-list"}
                dotListClass=" review-dots .react-multi-carousel-dot "
            >
                {reviews.map((review) => {
                    return (
                        <div key={review._id} className=' bg-white shadow-lg xs:w-full   md:w-[650px] h-[260px]  p-6'>
                            <h3 className="font-amaticSC tracking-widest font-bold xs:text-base  sm:text-lg  text-salat-50 ">{review.userName}</h3>
                            <p className="font-roboto font-light xs:text-base  sm:text-lg  text-text-color mt-2">{review.comment}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>

    )

}