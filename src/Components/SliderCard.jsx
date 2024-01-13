import { GiClover } from "react-icons/gi";
import image1 from '../assets/doll2.png'
const SliderCard = () => {
    return (
        <div className=' shadow-2xl hover:shadow-[#19D3AE] bg-white rounded-xl ease-out duration-300'>
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
    );
};

export default SliderCard;