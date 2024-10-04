import ProfileEdit from "../../components/profile/ProfileEdit";
import ProfileView from "../../components/profile/ProfileView";

const Profile = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-10 ">
          <ProfileView />
          <ProfileEdit />
        </div>
      </div>
    </>
  );
};

export default Profile;
