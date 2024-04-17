// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// 12:05 video
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div
              className="hero min-h-screen mt-20"
              style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            {/* <section className="py-6 dark:bg-violet-600 dark:text-gray-50">
              <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                <h1 className="text-5xl font-bold leading-none text-center">
                  Something totally different
                </h1>
                <p className="pt-2 pb-8 text-xl font-medium text-center">
                  Eum omnis itaque harum at quae sequi unde similique alias
                  asperiores totam. Ex cumque maxime harum doloremque, tempore
                  nam fugiat aspernatur rerum ipsa unde est modi commodi
                  molestias maiores eveniet eius esse asperiores neque dicta ea
                  quisquam? Excepturi sapiente officiis explicabo ab?
                </p>
                <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">
                  Learn more
                </button>
              </div>
            </section> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div
              className="hero min-h-screen mt-20"
              style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div
              className="hero min-h-screen mt-20"
              style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
            <div
              className="hero min-h-screen mt-20"
              style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
