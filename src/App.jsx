import { useState } from "react";

function App() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="container md:h-screen sm:h-screen w-full md:flex  items-center justify-center md:p-32 md:gap-10  sm:py-4">
      <div className="md:w-[40%] sm:w-full">
        <img className="w-full" src="../public/img.png" alt="img" />
      </div>
      <form onSubmit={handleSubmit} className="md:w-[60%] sm:w-full md:h-[500px] flex flex-col gap-6 p-10 rounded-md shadow-lg">
        <h1 className="text-center text-3xl text-black  font-bold">Login</h1>
        <div>
          <label htmlFor="" className="font-semibold my-4">
            Login ID
          </label>
          <input
            type="text"
            value={newUser.username}
            placeholder="Enter Login ID"
            onChange={handleOnChange}
            required
            className="w-full h-11 pl-4 border outline-blue-400"
          />
        </div>
        <div>
          <label htmlFor="" className="font-semibold my-6">
            Password
          </label>
          <div >
            <input
              required
              value={newUser.password}
              type="password"
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full h-11 pl-4 border outline-blue-400 relative "
            />
            <div className="absolute  font-bold cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 md:ml-[450px] ml-[300px]   md:-mt-8 -mt-8"
              >
                <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
          </div>
        </div>
        <div className=" flex justify-between">
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                Agree to{" "}
                <a href="" className="text-orange-500 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>
          <div className="text-orange-500 cursor-pointer">Change Password</div>
        </div>
        <div className="text-center">
          <button
            
            className="w-1/2 h-11 bg-sky-700 hover:bg-green-500 rounded-md font-semibold text-white p-2 mb-6"
          >
            Login
          </button>

          <p>
            Don't have an account ?{" "}
            <a href="/register" className="text-orange-500 font-semibold">
              Register Here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
