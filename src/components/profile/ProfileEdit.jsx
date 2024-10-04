import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateProfileRequest } from "../../apiRequest/profileApiRequest";
import { errorMsg, successMsg } from "../../utils/helper";

const ProfileEdit = () => {
  const { register, handleSubmit } = useForm();
  const [imagePreview, setImagePreview] = useState(null); // For showing image preview
  const [imageData, setImageData] = useState(null); // To store base64 string of the image
  const [error, setError] = useState(null); // For file size validation errors

  const MAX_FILE_SIZE = 100 * 1024; // 100KB limit

  // Function to convert file to base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); // Convert to base64 string
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    const updatedData = { ...data }; // Use react-hook-form for bio

    // Add base64 image if available
    if (imageData) {
      updatedData.avatar = imageData; // Store base64 image in the payload
    }

    console.log("Updated Data:", updatedData); // Check the data format

    try {
      let res = await updateProfileRequest(updatedData); // Send JSON data
      if (!res) {
        errorMsg("Server error! Login again");
      } else {
        successMsg("Profile updated!");
      }
    } catch (err) {
      errorMsg("Error while updating profile!");
    }
  };

  // Handle image file manually for preview and base64 conversion
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setError("File size exceeds 100KB");
        setImagePreview(null);
        setImageData(null); // Reset image data if file is too large
      } else {
        setError(null); // Clear error if valid
        setImagePreview(URL.createObjectURL(file)); // Preview image
        const base64Image = await toBase64(file); // Convert image to base64
        setImageData(base64Image); // Store base64 string in state
      }
    }
  };

  return (
    <section className="p-4 bg-white shadow rounded-lg w-full">
      <h2 className="text-2xl font-semibold mb-4 text-[#5A5C5F]">Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto p-4">
        
        {/* Bio Field with react-hook-form */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <input
            type="text"
            {...register("bio")}
            placeholder="Update your bio"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-0 focus:outline-none focus:border-gray-300 sm:text-sm"
          />
        </div>

        {/* Image Upload Field Handled Manually */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <div
            className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-50 transition-all"
            onClick={() => document.getElementById("imageInput").click()}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-[200px] w-[200px] rounded-md"
              />
            ) : (
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path d="M0 0h48v48H0z" fill="none"></path>
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12v-2a6 6 0 016-6h20a6 6 0 016 6v2M16 20h16M12 32h24"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600">Drag and drop an image or click to upload</p>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            )}
          </div>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange} // Manually handle image change
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#E5383B] text-white py-2 px-4 rounded-md hover:bg-[#cf3b3e] transition-all"
        >
          Update Profile
        </button>
      </form>
    </section>
  );
};

export default ProfileEdit;
