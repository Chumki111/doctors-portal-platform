// -------icons from react-icons-------
import { FaRegClock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Location = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* 1 st card */}
            <div className="   bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white rounded-md">
           <div className="flex gap-5 px-4 items-center py-5">
           <FaRegClock className="text-5xl animate-spin"/>
               <div>
               <h2 className="font-semibold text-2xl">Opening Hours</h2>
                <p>Sat - Thus : 10 AM - 4 PM</p>
                <p>Fri : 4 PM - 10 PM</p>
               </div>
           </div>
           </div>

            {/* Second Card */}
            <div className="bg-[#3A4256] rounded-md text-white">
           <div className="flex gap-5 px-4 items-center py-5">
           <MdLocationOn  className="text-6xl animate-bounce"/>
               <div>
               <h2 className="font-semibold text-2xl">Visit our location</h2>
                <p>Brooklyn, NY 10036, United States</p>
                </div>
           </div>
           </div>

            {/* third Card */}
            <div className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white cursor-context-menu rounded-md">
           <div className="flex gap-5 px-4 items-center py-5">
           <FaPhoneVolume  className="text-5xl animate-pulse"/>
               <div>
               <h2 className="font-semibold text-2xl">Contact us now</h2>
                <p>+880-01777-250277</p>
               </div>
           </div>
           </div>
        </div>
    );
};

export default Location;