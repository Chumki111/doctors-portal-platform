import { Link } from "react-router-dom";
import { imageUpload } from "../../api/utils";



const SignUp = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        console.log(name, email, password,image);

        try {
            // image upload
            const imageData = await imageUpload(image);
            console.log(imageData);
            console.log(imageData?.data);
            console.log(imageData?.data?.display_url);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="flex justify-center items-center mt-5">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border shadow-md font-sans">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleRegister} action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">
                            User_Name
                        </label>
                        {/* name input */}
                        <input type="text" name="name" id="name" placeholder="User_Name" className="w-full px-4 py-3 rounded-md border  dark:border-[#19D3AE]  dark:text-[#19D3AE] focus:dark:border-[#19D3AE]" />

                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">
                            Email
                        </label>
                        {/* email input */}
                        <input type="email" name="email" id="email" placeholder="User_Email" className="w-full px-4 py-3 rounded-md border  dark:border-[#19D3AE]  dark:text-[#19D3AE] focus:dark:border-[#19D3AE]" />

                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">
                            Password
                        </label>
                        {/* password input */}
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border   dark:border-[#19D3AE]  dark:text-[#19D3AE] focus:dark:border-[#19D3AE]" />

                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">
                            User_Photo
                        </label>
                        {/* image input */}
                        <input type="file" name="image" id="image" placeholder="Password" className="w-full px-4 py-3 rounded-md border   dark:border-[#19D3AE]  dark:text-[#19D3AE] focus:dark:border-[#19D3AE] appearance-none" />

                    </div>
                    <button type="submit" className="block w-full p-3 text-center bg-black text-white rounded-sm ">Sign Up</button>
                    <p className="text-black text-center sm:px-6">
                        Already Have A Account ?
                        <Link to="/login" className="hover:underline text-color pl-2">
                            Login Here
                        </Link>
                    </p>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px bg-slate-300 sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 uppercase text-black">or</p>
                    <div className="flex-1 h-px bg-slate-300 sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="block w-full p-3 text-center text-black  uppercase border border-black rounded shadow-sm">continue with google</button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;