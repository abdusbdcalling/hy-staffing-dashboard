import React from "react";

const UserTable = ({ user, handleDelete ,index}) => {
  const colors = ["bg-white", "bg-gray-200"];
  const rowColor = colors[index % colors.length];
  return (
    <tr className={`border-b border-gray-200 text-md font-normal ${rowColor}`}>
      <td className="p-2 text-left">{index+1}</td>
      <td className="p-2 text-left">{user.email}</td>
      <td className="p-2 text-center">{user.role}</td>
      <td className="p-2 text-center">
        <button
          onClick={() => handleDelete(user._id)}
          className="w-16 p-2 ml-2 bg-red-600 transform hover:scale-110 rounded-[4px]"
        >
          <span className="text-white font-medium">Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
