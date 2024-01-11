import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto font-sans">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;