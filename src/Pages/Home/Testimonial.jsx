

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiCommand } from "react-icons/bi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../Components/style.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import SliderCard from '../../Components/SliderCard';

const Testimonial = () => {
   
    return (
        <div className="my-14">
           <div className="md:pl-10 flex justify-between items-center">
          <div>
          <h2 className="text-xl font-semibold text-[#19D3AE]">Testimonial</h2>
            <h1 className="text-3xl font-medium">What Our Patients Says</h1>
          </div>
            <BiCommand className="text-[#19D3AE] cursor-copy" size={60}/>
           </div>

           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide className='my-3'>
          <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard/>
                </SwiperSlide>
        <SwiperSlide>
        <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard/>
          </SwiperSlide>
        <SwiperSlide>
        <SliderCard/>
          </SwiperSlide>
        <SwiperSlide>
        <SliderCard/>
         </SwiperSlide>
       
      </Swiper>
          
        </div>
    );
};

export default Testimonial;