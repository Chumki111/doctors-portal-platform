import PrimaryButton from "../../Components/PrimaryButton";


const Contact = () => {
    return (
      
            <section className="flex h-[500px] justify-center" style={{ backgroundImage: 'url("https://i.ibb.co/VpsLW8G/bg-blue.png")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                
                <div>
                <div className="text-center my-8">
                    <h4 className="text-[#19D3AE]">Contact Us</h4>
                    <h2 className="text-white text-2xl">Stay connected with us</h2>
                    </div>
                    <form action="#" className="space-y-8">
          <div>
            
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            
            <input
              type="text"
              id="subject"
              className="block p-3 w-full md:w-[450px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
           
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
         <div className="text-center">
         <PrimaryButton>Submit</PrimaryButton>
         </div>
        </form>
                </div>
                
            </section>

       
    );
};

export default Contact;