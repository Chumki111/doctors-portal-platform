import PrimaryButton from '../../Components/PrimaryButton';
import doctor from '../../assets/doctor-small.png'

const Appointment = () => {
    return (
    //     <section className="flex h-[450px] w-full flex-shrink-0  my-20" style={{ backgroundImage: 'url("https://i.ibb.co/VpsLW8G/bg-blue.png")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
    //     <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col">
    //     <div className="relative">  
    //         <img src={doctor}  className='h-[500px] mt-20'/>
    //       </div>
         
          
    //     </div>
    //   </section>
    <section className="flex my-16" style={{ backgroundImage: 'url("https://i.ibb.co/VpsLW8G/bg-blue.png")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
    <div className="flex gap-10 lg:flex-row flex-col">
    <div className="relative">  
        <img src={doctor } className=''  />
      </div>
      <div className=" md:space-y-6 sm:space-y-5 space-y-4 py-16 px-3">
      <h2 className="text-xl font-semibold text-[#19D3AE]">Appointment</h2>
      <h1 className='text-2xl md:text-4xl font-bold text-white'>Make an appointment Today</h1>
        <p className="lg:text-lg sm:text-base text-sm text-white max-w-lg">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
        </p>
        <div className="flex space-x-4">
        <PrimaryButton>Get Started</PrimaryButton>
         
        </div>
        
      </div>
     
    </div>
  </section> 
    );
};

export default Appointment;