import { BiCommand } from "react-icons/bi";

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
        </div>
    );
};

export default Testimonial;