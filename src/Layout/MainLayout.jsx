import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div className="container mx-auto font-sans">
            <Navbar/>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;