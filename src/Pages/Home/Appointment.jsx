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
    <section className="flex  h-[500px] px-8 my-16" style={{ backgroundImage: 'url("https://i.ibb.co/VpsLW8G/bg-blue.png")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
    <div className="flex gap-10 lg:flex-row flex-col">
    <div className="relative">  
        <img src={doctor } className=''  />
      </div>
      <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
        <h1 className="lg:text-4xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Your New Smile Starts Here.</h1>
        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
          Track and improve the growth of your business. Send the right customers your way with this tool
        </p>
        <div className="flex space-x-4">
          <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] h-10 px-4 py-2  text-white">
            Get Started
          </button>
         
        </div>
        
      </div>
     
    </div>
  </section> 
    );
};

export default Appointment;