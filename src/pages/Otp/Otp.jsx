import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/common/Logo";
import ReactCodeInput from "react-code-input";
import { otpVerificationRequest } from "../../apiRequest/userApiRequest";
import { errorMsg } from "../../utils/helper";

const Otp = () => {
    const navigate = useNavigate();
    const [otp,setOtp] = useState(null);

  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    boxShadow: "none",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid",
    outline: "none",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "rgb(249 250 251)",
    borderColor: "lightgrey",
  };

  const handleOtp = async()=>{
    let res = await otpVerificationRequest(otp);
    if(res){
        navigate('/login');
    }
    else{
        errorMsg("Otp is invalid!");
    }
  }

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
              Verify Your Account
            </h1>
            <ReactCodeInput
              fields={6}
              inputStyle={defaultInputStyle}
              inputMode={"numeric"}
              name={"otp"}
              onChange={(value) => setOtp(value)}
            />
            <button
              onClick={handleOtp}
              type="submit"
              className={`w-full text-white  font-medium rounded-[8px] text-sm px-5 py-2.5 text-center bg-[#E5383B]`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
