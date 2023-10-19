import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-[#0A0B0B] py-28 my-20">
      <div className="  w-4/12 m-auto mb-12 space-y-4 text-center">
        <h3 className="text-5xl font-bold text-white">ClIENTS REVIEWS</h3>
        <p className="text-orange-500 font-semibold">GET YOUR BEARD</p>
        <div className="divider"></div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide  key={review._id}>
            <div className="flex justify-center items-center w-[900px] mx-auto gap-8">
                <img src={review.image} alt="" />
                <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-white">{review.review}</h3>
                    <h4 className="text-2xl font-semibold text-orange-500">{review.name}</h4>
                    <h4 className="text-2xl font-semibold text-white">{review.company}</h4>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
