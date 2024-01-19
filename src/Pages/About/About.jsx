// import fluoride from '../../assets/icons/fluoride 1.png'
import { GrYoga } from "react-icons/gr";
import { IoFitnessSharp } from "react-icons/io5";
import { MdSportsGymnastics } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";
import Card from "../../Components/Card";
const About = () => {
    return (
        <div className="my-16">

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-14'>
                {/* card-1 */}

                <Card title="Yoga" icon={GrYoga} description="Yoga is a holistic discipline that originated in ancient India, encompassing physical, mental, and spiritual practices." />
                {/* card-2 */}
                <Card title="Cross Fit" icon={IoFitnessSharp} description='"Fit" generally refers to a state of good physical health and well-being achieved through regular exercise, proper nutrition, and an active lifestyle' />

                {/* card-3 */}
                <Card title="gym nastic" icon={MdSportsGymnastics} description='Gymnastics is a sport that combines strength, flexibility, balance, and coordination through a series of dynamic and graceful movements.' />




                {/* Weightlifting Card */}
                <Card title="Weightlifting" icon={GiWeightLiftingUp} description='Weightlifting is a strength training activity that builds muscle mass and increases strength. Grab those weights and sculpt your body!' />



                {/* Mental Health Card */}
                <Card title="Mental Health" icon={BsEmojiSmile} description='Prioritize your mental well-being. Learn about stress management, mindfulness, and techniques to promote a positive and resilient mindset' />


                {/* Cycling Card */}
                <Card title="Cycling" icon={MdDirectionsBike} description='Cycling is a low-impact exercise that improves cardiovascular health and leg strength. Get on your bike and enjoy the ride!' />

            </div>
        </div>
    );
};

export default About;