import image1 from '../../assets/doll2.png'
import { GiClover } from "react-icons/gi";
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
        <SwiperSlide>
        <div className='shadow-2xl bg-white rounded-xl'>
        <GiClover className='text-[#19D3AE] animate-ping text-2xl'/>
                   <div className='py-6 text-center px-7'>
                  <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                   </div>
                   <div className='flex gap-3 px-7'>
                   <div className='w-20 h-20 '>
                   <img src={image1} alt="" className='rounded-full border-2 p-1 border-[#19D3AE]'/>
                   </div>
                   <div className='text-start'>
                    <h2 className='font-medium text-[#19D3AE]'>Chumki Khatun</h2>
                    <h5>Rajshahi,Bangladesh</h5>
                   </div>
                   </div>
                </div></SwiperSlide>
        <SwiperSlide>
          <div className='shadow-2xl bg-white rounded-xl'>
          <GiClover className='text-[#19D3AE] animate-ping text-2xl'/>
                   <div className='py-6 text-center px-7'>
                  <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                   </div>
                   <div className='flex gap-3 px-7'>
                   <div className='w-20 h-20 '>
                   <img src={image1} alt="" className='rounded-full border-2 p-1 border-[#19D3AE]'/>
                   </div>
                   <div className='text-start'>
                    <h2 className='font-medium text-[#19D3AE]'>Chumki Khatun</h2>
                    <h5>Rajshahi,Bangladesh</h5>
                   </div>
                   </div>
                </div>
                </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl bg-white rounded-xl'>
        <GiClover className='text-[#19D3AE] animate-ping text-2xl'/>
                   <div className='py-6 text-center px-7'>
                  <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                   </div>
                   <div className='flex gap-3 px-7'>
                   <div className='w-20 h-20 '>
                   <img src={image1} alt="" className='rounded-full border-2 p-1 border-[#19D3AE]'/>
                   </div>
                   <div className='text-start'>
                    <h2 className='font-medium text-[#19D3AE]'>Chumki Khatun</h2>
                    <h5>Rajshahi,Bangladesh</h5>
                   </div>
                   </div>
                </div>
        </SwiperSlide>
        <SwiperSlide><div className='shadow-2xl bg-white rounded-xl'>
        <GiClover className='text-[#19D3AE] animate-ping text-2xl'/>
                   <div className='py-6 text-center px-7'>
                  <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                   </div>
                   <div className='flex gap-3 px-7'>
                   <div className='w-20 h-20 '>
                   <img src={image1} alt="" className='rounded-full border-2 p-1 border-[#19D3AE]'/>
                   </div>
                   <div className='text-start'>
                    <h2 className='font-medium text-[#19D3AE]'>Chumki Khatun</h2>
                    <h5>Rajshahi,Bangladesh</h5>
                   </div>
                   </div>
                </div></SwiperSlide>
        <SwiperSlide><div className='shadow-2xl bg-white rounded-xl'>
        <GiClover className='text-[#19D3AE] animate-ping text-2xl'/>
                   <div className='py-6 text-center px-7'>
                  <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                   </div>
                   <div className='flex gap-3 px-7'>
                   <div className='w-20 h-20 '>
                   <img src={image1} alt="" className='rounded-full border-2 p-1 border-[#19D3AE]'/>
                   </div>
                   <div className='text-start'>
                    <h2 className='font-medium text-[#19D3AE]'>Chumki Khatun</h2>
                    <h5>Rajshahi,Bangladesh</h5>
                   </div>
                   </div>
                </div></SwiperSlide>
        <SwiperSlide><div className='shadow-2xl bg-white rounded-xl'>
        <GiClover className='text-[#19D3AE] animate-ping text-2xl'/>
                   <div className='py-6 text-center px-7'>
                  <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                   </div>
                   <div className='flex gap-3 px-7'>
                   <div className='w-20 h-20 '>
                   <img src={image1} alt="" className='rounded-full border-2 p-1 border-[#19D3AE]'/>
                   </div>
                   <div className='text-start'>
                    <h2 className='font-medium text-[#19D3AE]'>Chumki Khatun</h2>
                    <h5>Rajshahi,Bangladesh</h5>
                   </div>
                   </div>
                </div></SwiperSlide>
       
      </Swiper>
          
        </div>
    );
};

export default Testimonial;