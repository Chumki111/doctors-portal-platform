import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;