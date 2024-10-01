import { useState } from 'react';
import ProfileEdit from '../../components/profile/ProfileEdit';
import ProfileView from '../../components/profile/ProfileView';
import { Avatar } from 'flowbite-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software Developer at XYZ Company',
    mobile: +8801626416432,
    avatar:
      'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <>
      <div className="w-full h-s mx-auto p-4">
        {isEditing ? (
          <ProfileEdit profile={profile} onSave={handleSave} onCancel={handleEditToggle} />
        ) : (
          <ProfileView profile={profile} onEdit={handleEditToggle} />
        )}
      </div>
    </>
  );
};

export default Profile;
