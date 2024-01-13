import fluoride from '../../assets/icons/fluoride 1.png'
import cavity from '../../assets/icons/cavity 1.png'
import whitening from '../../assets/icons/whitening 1.png'
const Services = () => {
    return (
        <div className="my-16">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-[#19D3AE]">Our Services</h2>
                <p className="text-[#3A4256] text-3xl">Services We Provide</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-14'>
                {/* card-1 */}
                <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#19D3AE] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#19D3AE] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md '>
                   <div className='py-6 text-center'>
                   <div className='flex justify-center py-3 pb-4 rounded-md '><img src={fluoride} alt=""  className=''/></div>
                    <h2 className='text-[#3A4256] font-semibold'>Fluoride Treatment</h2>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                   </div>
                </div>
                {/* card-2 */}
                <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#19D3AE] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#19D3AE] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md'>
                   <div className='py-6 text-center'>
                   <div className='flex justify-center py-3 pb-4 rounded-md '><img src={cavity} alt=""  className=''/></div>
                    <h2 className='text-[#3A4256] font-semibold'>Cavity Filling</h2>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                   </div>
                </div>

                {/* card-3 */}
                <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#19D3AE] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#19D3AE] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md'>
                   <div className='py-6 text-center'>
                   <div className='flex justify-center py-3 pb-4 rounded-md '><img src={whitening} alt=""  className=''/></div>
                    <h2 className='text-[#3A4256] font-semibold'>Teeth Whitening</h2>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                   </div>
                </div>
               
            </div>
        </div>
    );
};

export default Services;