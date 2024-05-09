import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const googleHandler = () => {
    window.open('http://localhost:8000/auth/google', '_self');
  };

  const githubHandler = () => {
    window.open('http://localhost:8000/auth/github', '_self');
  };
  const facebookHandler = () => {
    window.open('http://localhost:8000/auth/facebook', '_self');
  };
  return (
    <div className="container flex flex-col gap-5 mt-5 justify-center items-center">
      <div className="font-bold text-2xl font-mono">Choose a login method</div>
      <div className="sm:w-[70%] w-full flex flex-col justify-center items-center sm:flex-row mt-5">
        <div className="w-[50%] flex flex-col  sm:mx-5 items-center gap-5 justify-center py-10">
          <div
            onClick={googleHandler}
            className="flex bg-red-500 min-w-[300px]  text-slate-100 justify-center items-center px-2  rounded-xl  hover:scale-110 cursor-pointer py-2 gap-3"
          >
            <FcGoogle /> <div>Google</div>
          </div>
          <div
            onClick={githubHandler}
            className="flex bg-black  min-w-[300px] text-slate-100 justify-center items-center px-2  rounded-xl py-2  hover:scale-110 cursor-pointer gap-3"
          >
            <FaGithub /> <div>Github</div>
          </div>
          <div
            onClick={facebookHandler}
            className="flex bg-blue-500 min-w-[300px]  text-slate-100 justify-center items-center px-2 rounded-xl  hover:scale-110 cursor-pointer py-2 gap-3"
          >
            <FaFacebook /> <div>Facebook</div>
          </div>
        </div>
        <div className="sm:w-[50%] w-full bg-slate-900 rounded-xl text-slate-100">
          <form action="" className="m-8 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2 justify-center">
              <label htmlFor="" className="font-semibold text-lg">
                Name : -
              </label>
              <input
                type="text"
                className="text-slate-900 border border-black px-3  rounded-xl"
                placeholder="Enter your name."
              />
            </div>
            <div className="flex flex-col items-start gap-2 justify-center">
              <label htmlFor="" className="font-semibold text-lg">
                Password : -
              </label>
              <input
                className="text-slate-900 border border-black px-3  rounded-xl"
                type="text"
                placeholder="Enter your password."
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 cursor-pointer w-fit text-slate-100 px-3 py-1 text-sm rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
