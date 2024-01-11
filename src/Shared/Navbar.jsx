import { useState } from "react";
import { Link } from "react-router-dom";
import 'react-modern-drawer/dist/index.css'
import { CgMenuGridO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import Drawer from 'react-modern-drawer'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const link = (
        <>
          <li>
            <Link to="/" className="text-black hover:text-[#a7a7a7]">
              Home
            </Link>
          </li>
         
        </>
      );
    const linktwo = (
        <>
          <li>
            <Link to="/" className="text-black hover:text-[#a7a7a7]">
              Home
            </Link>
          </li>
         
        </>
      );
  
    return (
        <>
      
        <nav className="flex items-center justify-between py-4 px-6 shadow-md">
          <div className="flex items-center flex-shrink-0 gap-3">
            <label
             onClick={toggleDrawer}
              className="btn btn-square lg:hidden btn-ghost"
            >
              <CgMenuGridO className="text-[#00ADB5] text-2xl"></CgMenuGridO>
            </label>
            
            <h2 className="text-2xl font-semibold bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Doctor_Portal</h2>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-5 font-medium">{link}</ul>
          </div>
        </nav>
      
      <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className="flex justify-end">
                <label
             onClick={toggleDrawer}
              className="btn btn-square lg:hidden btn-ghost m-6"
            >
              <IoMdClose className=" text-2xl"></IoMdClose>
            </label>
                </div>
                <ul className="flex justify-center items-end px-10 flex-col font-medium">{linktwo}</ul>
            </Drawer>

    
     

    </>
    );
};

export default Navbar;