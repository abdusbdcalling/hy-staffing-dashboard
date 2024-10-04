import { useState } from 'react';
import { useForm } from "react-hook-form";
import { errorMsg, successMsg } from '../../utils/helper';
import { updatePasswordRequest } from '../../apiRequest/userApiRequest';

const ChangePassword = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async(data) => {
    if(data.newPassword !== data.confirmPassword){
      errorMsg("Password didn't matched!")
    }
    else{
     let res = await updatePasswordRequest(data);
     if(res){
      successMsg("Password updated successfully!")
     }
     else{
      errorMsg("Please Sign in and try again!")
     }
    }
  };

  return (
    <div>
      <div className="p-10 mt-10 sm:max-w-xl w-full mx-auto bg-white shadow rounded-lg">
        <h2 className="sm:text-2xl sm:mt-0 mt-2 mb-4 text-center text-xl font-semibold text-gray-600">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="currentPassword">
              Current Password
            </label>
            <input
              type="password"
              {...register("currentPassword", { required: true })}
                  aria-invalid={errors.currentPassword ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
             {errors.currentPassword?.type === "required" && (
                  <p role="alert" className="text-red-600 text-sm mt-1">Current Password is required</p>
                )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              {...register("newPassword", { required: true })}
                  aria-invalid={errors.newPassword ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
              {errors.newPassword?.type === "required" && (
                  <p role="alert" className="text-red-600 text-sm mt-1">New Password is required</p>
                )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
             {errors.confirmPassword?.type === "required" && (
                  <p role="alert" className="text-red-600 text-sm mt-1">Confirm Password is required</p>
                )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#E5383B] text-white font-bold rounded-md hover:bg-blue-700"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
