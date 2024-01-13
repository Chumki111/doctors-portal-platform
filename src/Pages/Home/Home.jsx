import Appointment from "./Appointment";
import Contact from "../Contact/Contact";
import Banner from "./Banner";
import Location from "./Location";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Location/>
            <Services/>
            <Treatment/>
            <Appointment/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;