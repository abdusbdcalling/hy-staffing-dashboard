import { useState } from "react";
import { useForm } from "react-hook-form";
import { createJobRequest } from "../../apiRequest/jobApiRequest";
import { errorMsg, successMsg } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const JobCreate = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Handle submit function
  const onSubmit = async (data) => {
   
    let res = await createJobRequest(data);
    if(res){
      successMsg("Created a new Job!");
      navigate('/jobs/read')
    }
    else{
      errorMsg("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="p-4 bg-white shadow rounded-lg sm:max-w-3xl w-full mx-auto mt-10">
        <h1 className="sm:text-2xl text-center mb-4-10 sm:mt-0 text-xl font-semibold text-gray-600">
          Create Job Post
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="title"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              aria-invalid={errors.title ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.title?.type === "required" && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                Title is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="company"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              {...register("company", { required: true })}
              aria-invalid={errors.company ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.company?.type === "required" && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                Company is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              {...register("location", { required: true })}
              aria-invalid={errors.location ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.location?.type === "required" && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                Location is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <input
              type="text"
              id="jobType"
              {...register("jobType", { required: true })}
              aria-invalid={errors.jobType ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.jobType?.type === "required" && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                Job Type is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="deadline"
            >
              Application Deadline
            </label>
            <input
              type="date"
              id="deadline"
              {...register("deadline", { required: true })}
              aria-invalid={errors.deadline ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.deadline?.type === "required" && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                Deadline is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="experience"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              {...register("experience", { required: true })}
              aria-invalid={errors.experience ? "true" : "false"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="e.g., 3 years, 5-7 years"
            />
            {errors.experience?.type === "required" && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                Experience is required
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#E5383B] text-white font-bold rounded-[8px]"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobCreate;
