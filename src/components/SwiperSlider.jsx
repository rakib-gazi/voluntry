import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../assets/slider1.jpg";
import Slider2 from "../assets/Slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const SwiperSlider = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <div className="col-span-7 lg:col-span-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper  "
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={slider1}
                className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
              />

              <div className="absolute top-1/3 left-0 w-full lg:w-1/2 ps-4">
                <h1 className="text-base lg:text-3xl font-bold text-nav">
                  Making a Difference Through Medical Volunteering
                </h1>
                <p className="text-btm-footer text-xs lg:text-base font-semibold pt-2">
                  Medical volunteers deliver healthcare, educate communities,
                  and provide vital support during emergencies, improving lives
                  with compassion and commitment.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={Slider2}
                className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
              />

              <div className="absolute top-7 left-0 w-full lg:w-2/3 ps-4">
                <h1 className="text-base lg:text-3xl font-bold text-nav">
                  Supporting Animals Through Volunteering
                </h1>
                <p className="text-btm-footer text-xs lg:text-base font-semibold pt-2">
                  Animal volunteers care for rescued animals, assist shelters,
                  promote adoption, and support wildlife conservation, making a
                  meaningful impact on animal welfare and habitats.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={slider3}
                className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
              />

              <div className="absolute top-7 left-0 w-full lg:w-2/3 ps-4">
                <h1 className="text-base lg:text-3xl font-bold text-nav">
                  Empowering Communities Through Social Volunteering
                </h1>
                <p className="text-btm-footer text-xs lg:text-base font-semibold pt-2">
                  Social volunteers support community programs, assist
                  vulnerable groups, promote education, and address social
                  issues, fostering positive change and improving lives through
                  dedication and compassion.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={slider4}
                className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
              />

              <div className="absolute top-7 left-0 w-full lg:w-2/3 ps-4">
                <h1 className="text-base lg:text-3xl font-bold text-nav">
                  Transforming Lives Through Education Volunteering
                </h1>
                <p className="text-btm-footer text-xs lg:text-base font-semibold pt-2">
                  Education volunteers mentor students, teach skills, support
                  schools, and promote lifelong learning, empowering individuals
                  and communities with knowledge and opportunities for a
                  brighter future.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-2 hidden lg:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper  "
        >
          <SwiperSlide>
            <img
              src={Slider2}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider3}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider4}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider1}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[450px] w-full rounded-b-none lg:rounded-b-3xl border-2 border-nav"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
