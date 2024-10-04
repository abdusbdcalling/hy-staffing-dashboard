import React from "react";
import { TbHttpDelete } from "react-icons/tb";

const UserTable = ({ user, handleDelete, index,handleRole }) => {
  const colors = ["bg-white", "bg-gray-200"];
  const rowColor = colors[index % colors.length];

  return (
    <tr className={`border-b border-gray-200 text-md font-normal ${rowColor}`}>
      <td className="p-2 text-left">
        {user?.profile?.firstName}
        {user?.profile?.lastName}
      </td>
      <td className="p-2 text-left">{user?.profile?.mobile}</td>
      <td className="p-2 text-left">{user.email}</td>
      <td className="p-2 text-center">
       {
        user.role === "admin"?(<p className="text-red-500 font-serif font-semibold">{user.role}</p>):( <button onClick={()=>handleRole(user._id,user.role)}
          className={`${
           user.role === "user"
              ? "bg-blue-200 text-blue-800"
              : "bg-green-200 text-green-800"
          } px-1.5 py-0.5 rounded font-serif font-semibold transform hover:scale-110`}
        >
          {user.role}
        </button>)
       }
      </td>
      <td className="p-2 flex items-center justify-center ">
        <button
          onClick={() => handleDelete(user._id)}
          className="w-16 p-2 ml-2 flex items-center justify-center text-lg text-white bg-red-600 transform hover:scale-110 rounded-[4px]"
        >
          <span>
            <TbHttpDelete />
          </span>
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
