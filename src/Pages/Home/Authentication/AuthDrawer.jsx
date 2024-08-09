import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthDrawer = ({ toggleDrawer }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <button onClick={toggleDrawer} className="absolute top-4 right-4 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-600"> *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-600"> *</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="btn bg-[#2A61B4] hover:bg-[#2A61B4] text-white font-semibold w-full">
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex mx-5 justify-between">
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" />
              <h3 className="mt-[10px] ">Remember me</h3>
            </div>
            <button className="btn btn-link">Lost your password?</button>
          </div>
          <div className="text-center mt-12">
            <h2 className="font-semibold text-lg text-[##AEAEAE]">No account yet?</h2>
            <div className="border-b-[#2A61B4]">
              <NavLink style={{ borderBottom: '4px solid #2A61B4' }} className='hover:text-gray-600 rounded-b-md text-black uppercase text-lg ' to='/Register'>Create an Account</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDrawer;
