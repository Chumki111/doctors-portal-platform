// import fluoride from '../../assets/icons/fluoride 1.png'
import { GrYoga } from "react-icons/gr";
import { IoFitnessSharp } from "react-icons/io5";
import { MdSportsGymnastics } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdDirectionsBike} from "react-icons/md";
import Card from "../../Components/Card";
const About = () => {
    return (
        <div className="my-16">
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-14'>
                {/* card-1 */}
               
                <Card title="Yoga" icon={GrYoga} description="Yoga is a holistic discipline that originated in ancient India, encompassing physical, mental, and spiritual practices."/>
                 {/* card-2 */}
                 <Card title="Cross Fit" icon={IoFitnessSharp} description='"Fit" generally refers to a state of good physical health and well-being achieved through regular exercise, proper nutrition, and an active lifestyle'/>
               
                 {/* card-3 */}
                 <Card title="gym nastic" icon={MdSportsGymnastics} description='Gymnastics is a sport that combines strength, flexibility, balance, and coordination through a series of dynamic and graceful movements.'/>
               
               
               

 {/* Weightlifting Card */}
 <Card title="Weightlifting" icon={GiWeightLiftingUp} description='Weightlifting is a strength training activity that builds muscle mass and increases strength. Grab those weights and sculpt your body!'/>
 


{/* Mental Health Card */}
<Card title="Mental Health" icon={BsEmojiSmile} description='Prioritize your mental well-being. Learn about stress management, mindfulness, and techniques to promote a positive and resilient mindset'/>


{/* Cycling Card */}
<div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#448C74] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#448C74] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md hover:shadow-2xl'>
   <div className='py-6 text-center'>
      <div className='flex justify-center py-3 pb-4 rounded-md '>
         <div className=" border rounded-full border-[#448C74] p-4">
            <MdDirectionsBike className='text-6xl text-[#E5C466]' />
         </div>
      </div>
      <h2 className='text-[#3A4256] text-2xl font-semibold uppercase'>Cycling</h2>
      <p className="px-3 py-3">Cycling is a low-impact exercise that improves cardiovascular health and leg strength. Get on your bike and enjoy the ride!</p>
      <a href="/cycling" className="text-[#448C74] hover:text-[#E5C466] font-semibold">Learn More</a>
   </div>
</div>



            </div>
        </div>
    );
};

export default About;