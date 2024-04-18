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
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/xfyZkvK/production-plant.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div
                  className="max-w-md"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1 className="mb-5 text-5xl lg:text-8xl font-bold">
                    Production Plant
                  </h1>
                  <p className="mb-5">
                    Modern production facility equipped for large-scale
                    manufacturing.
                  </p>
                  <button className="btn_wave btn1 rounded-md">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/7yTtrBF/power-plant.png)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div
                className="hero-content text-center text-neutral-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl lg:text-8xl font-bold">
                    Power Plant
                  </h1>
                  <p className="mb-5">
                    Large-scale power generation facility capable of supplying
                    electricity to a city.
                  </p>
                  <button className="btn_wave btn1 rounded-md">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/pyMG4TG/factory.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div
                className="hero-content text-center text-neutral-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl lg:text-8xl font-bold">
                    Factory
                  </h1>
                  <p className="mb-5">
                    State-of-the-art factory with modern equipment for
                    manufacturing processes.
                  </p>
                  <button className="btn_wave btn1 rounded-md">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/SR0fyPs/industrail-park.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div
                className="hero-content text-center text-neutral-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl lg:text-8xl font-bold">
                    Industrial Park
                  </h1>
                  <p className="mb-5">
                    Vacant lot within a bustling industrial park, ideal for
                    development.
                  </p>
                  <button className="btn_wave btn1 rounded-md">
                    Get Started
                  </button>
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
