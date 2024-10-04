import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"; // Import icons
import useInfo from "../../hooks/useInfo";

const ProfileView = () => {

  const {data,loading} = useInfo();
  if(loading){
    return <h1>Loading......</h1>
  }

  return (
    <section className="max-w-sm w-full flex items-center justify-center font-serif">
     <div className="max-w-md w-full  mx-auto bg-white shadow rounded-lg overflow-hidden">
      {/* Profile Image */}
      <div className="flex justify-center  p-4 bg-gradient-to-r from-red-500 to-rose-500">
        <img
          className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
          src={data[0]?.profile.avatar}
          alt="Profile"
        />
      </div>

      {/* Bio */}
      <div className="p-4">
        <p className="text-gray-600 text-center italic mb-4">{data[0]?.profile.bio}</p>
      </div>

      {/* Profile Info */}
      <div className="p-6">
        {/* Name */}
        <div className="flex items-center mb-4">
          <FaUser className="text-red-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">{data[0]?.profile.firstName}{""}{data[0]?.profile.lastName}</h2>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-red-500 mr-2" />
          <span className="text-gray-600">{data[0]?.email}</span>
        </div>

        {/* Mobile */}
        <div className="flex items-center mb-4">
          <FaPhone className="text-red-500 mr-2" />
          <span className="text-gray-600">{data[0]?.profile.mobile}</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProfileView;
