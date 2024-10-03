import { useState } from 'react';
import Button from './Button';
import { useForm } from "react-hook-form";
import { updateProfileRequest } from '../../apiRequest/profileApiRequest';
import { errorMsg, successMsg } from '../../utils/helper';


const ProfileEdit = ({onCancel}) => {
  const { register, handleSubmit, setValue } = useForm();
  const [base64Image, setBase64Image] = useState(""); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setBase64Image(base64String); // Store the base64 image in state
      setValue("imageBase64", base64String); // Set value for form data
    };

    reader.readAsDataURL(file); // Convert file to base64
  };

  const onSubmit =async (data) => {
    console.log(data)
   let res = await updateProfileRequest(data);
   if(!res){
    errorMsg("something went wrongh!");
   }
   else{
    successMsg("Profile updated!");
   }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-[#5A5C5F]">Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Avatar</label>
          <input
           type="file"
           accept="image/*"
           name="avatar"
           onChange={handleImageChange}
           className="w-full p-2 border border-gray-300 rounded"
         />

      {/* Hidden input to store the base64 image */}
         <input
         type="hidden"
         {...register("imageBase64")}
         />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            {...register("bio")}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex space-x-4">
          {/* Custom button componet*/}
          <Button type="submit" className="bg-green-600">
            Save
          </Button>
          <Button type="button" onClick={onCancel} className="bg-[#E5383B]">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
