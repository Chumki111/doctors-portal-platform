import PrimaryButton from '../../Components/PrimaryButton';
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
               <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default Treatment;