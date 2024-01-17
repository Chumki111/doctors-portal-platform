// import fluoride from '../../assets/icons/fluoride 1.png'
import { GrYoga } from "react-icons/gr";
const About = () => {
    return (
        <div className="my-16">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-[#19D3AE]">Our Features...</h2>
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-14'>
                {/* card-1 */}
                <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#448C74] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#448C74] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md hover:shadow-2xl'>
                   <div className='py-6 text-center'>
                   <div className='flex justify-center py-3 pb-4 rounded-md '><GrYoga className='text-6xl text-[#E5C466]'/></div>
                    <h2 className='text-[#3A4256] font-semibold'>Fluoride Treatment</h2>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                   </div>
                </div>
               <div>

               </div>
                <div className='hover:shadow-2xl  bg-white relative inline-block rounded-md border border-[#E5C466]'>
                   <div className='py-6 text-center'>
                   <div className='flex justify-center py-3 pb-4 rounded-md '><GrYoga className='text-6xl text-[#E5C466]'/></div>
                    <h2 className='text-[#3A4256] font-semibold'>Fluoride Treatment</h2>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                   </div>
                </div>
               
               

               
               
            </div>
        </div>
    );
};

export default About;