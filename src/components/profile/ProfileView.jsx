import Button from './Button';

const ProfileView = ({ profile, onEdit }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl text-center justify-center font-semibold mb-4">Profile</h2>
      <div className="flex mx-auto gap-[200px] justify-center items-center p-10">
        <div>
          <img src={profile.avatar} className=" rounded-full" alt="profile image" />
        </div>
        <div>
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Mobile:</strong> {profile.mobile}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Bio:</strong> {profile.bio}
          </p>

          <Button onClick={onEdit} className="mt-4">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
