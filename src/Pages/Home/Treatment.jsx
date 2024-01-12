import treatment from '../../assets/treatment.png'

const Treatment = () => {
    return (
        <div className='flex w-full max-w-6xl gap-10 lg:flex-row flex-col justify-center'>
            <img src={treatment} alt="" className='h-full lg:h-[500px]'/>
            <div className='pt-20'>
                <h1 className='text-3xl  md:text-5xl font-semibold py-4'>Exceptional Dental <br /> Care, on Your Terms</h1>
                <p className='md:max-w-xl lg:max-w-md py-3'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] h-10 px-4 py-2  text-white">
                Get Started
              </button>
            </div>
        </div>
    );
};

export default Treatment;