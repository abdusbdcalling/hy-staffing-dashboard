import Logo from "../../components/common/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { regiterRequest } from "../../apiRequest/userApiRequest";
import { successMsg } from "../../utils/helper";
import { message } from "../../utils/modals/message";

export default function Register() {
  const [isAgreed, setIsAgreed] = useState(false); // State to track agreement with terms
  const [error,setError] = useState('');
  const navigate = useNavigate();

  // Function to handle radio button change
  const handleRadioChange = () => {
    setIsAgreed((prev) => !prev); 
  };

  const {
    register,formState: { errors },handleSubmit} = useForm();
  const onSubmit = async (data) => {
     if(data.password !== data.conifrmPassword){
        setError("password didn't matched!")
     }
     else{
      setError('');
      let res = await regiterRequest(data);
      if(res){
        message("6 digit otp has been sent to your email")
        navigate('/otp-verification');
      }
     }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <p className="text-red-500 ">{error}</p>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 "
                  placeholder="name@company.com"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                 {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-600 text-sm mt-1">Email is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 "
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                 {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600 text-sm mt-1">Email is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 "
                  {...register("conifrmPassword", { required: true })}
                  aria-invalid={errors.conifrmPassword ? "true" : "false"}
                />
                 {errors.conifrmPassword?.type === "required" && (
                  <p role="alert" className="text-red-600 text-sm mt-1">Email is required</p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1"
                    checked={isAgreed}
                    onChange={handleRadioChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <Link
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                disabled={!isAgreed}
                type="submit"
                className={`w-full text-white  font-medium rounded-[8px] text-sm px-5 py-2.5 text-center ${!isAgreed?'bg-gray-300':'bg-[#E5383B]'}`}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
