import Button from './Button';
import { FaRegUser } from 'react-icons/fa6';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { MdWorkOutline } from 'react-icons/md';
import useInfo from '../../hooks/useInfo';

const ProfileView = ({ profile, onEdit }) => {
  const { data, loading, error } = useInfo();
  console.log(data[0]?.profile?.avatar);
  return (
    <div className="p-4 sm:max-w-4xl bg-white shadow rounded-[8px]">
      <div className="sm:flex gap-[60px] justify-start items-center p-10 grid grid-cols-2 divide-x-2">
        <div className="sm:mb-0 mb-10 ">
          <img
            src={data[0]?.profile?.avatar}
            className="w-[200px] h-[200px] rounded-full "
            alt="profile image"
          />
        </div>
        <div className="pl-[60px] ">
          <div className="space-y-1">
            <div className="flex gap-2 items-center text-lg">
              <FaRegUser />
              <p>{data[0]?.profile?.firstName} {data[0]?.profile?.lastName}</p>
            </div>
            <div className="flex gap-2 items-center text-lg">
              <IoCallOutline />
              <p>{data[0]?.profile?.mobile}</p>
            </div>
            <div className="flex gap-2 items-center text-lg">
              <MdOutlineAlternateEmail />
              <p>{data[0]?.email}</p>
            </div>
            <div className="flex gap-2 items-center text-lg">
              <MdWorkOutline />
              <p>{profile.bio}</p>
            </div>
          </div>
          <div className="mt-4">
            <Button onClick={onEdit} className="bg-[#E5383B] text-lg">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
