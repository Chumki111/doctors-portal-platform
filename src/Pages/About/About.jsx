// import fluoride from '../../assets/icons/fluoride 1.png'

import { Helmet } from "react-helmet-async";
import { IoMdArrowDropright } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
        <Helmet>
            <title>Doctor_Portal | About</title>
        </Helmet>
        <div className="">
        <div className="flex justify-between px-6">
        <div className="flex items-center my-5 cursor-pointer">
        <Link to={'/'} className="text-xl font-semibold ">Home </Link>
         <IoMdArrowDropright className="w-[22px]"/>
         <h1 className="text-xl font-semibold text-[#448c74]">About Us</h1>
        </div>
        <div className="md:flex gap-5 items-center cursor-pointer hidden ">
        <IoFitnessOutline className="text-4xl"/>
        <GrYoga className="text-4xl"/>
 <GiBoxingGloveSurprise className="text-4xl"/>
        </div>
        
         </div>
         <hr />
        </div>
        </>
    );
};

export default About;