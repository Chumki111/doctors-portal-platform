import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border shadow-md font-sans">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">
                        Username
                    </label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border  dark:border-[#19D3AE]  dark:text-[#19D3AE] focus:dark:border-[#19D3AE]"/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">
                        Password
                    </label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border   dark:border-[#19D3AE]  dark:text-[#19D3AE] focus:dark:border-[#19D3AE]"/>
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center bg-black text-white rounded-sm ">Sign in</button>
                <p className="text-black text-center sm:px-6">
                New To Doctors_Portal ?
                <Link to="/register" className="hover:underline text-color pl-2">
                    create New Account
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

export default Login;