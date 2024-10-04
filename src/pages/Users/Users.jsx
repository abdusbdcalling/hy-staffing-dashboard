import { useEffect, useState } from "react";
import { userListRequest } from "../../apiRequest/userApiRequest";
import UserTable from "../../components/users/UserTable";
import { updateRole } from "../../utils/modals/updateRole";


const Users = () => {

    const [users, setUsers] = useState([]);
   
 
    useEffect(() => {
      (async()=>{
            let res = await userListRequest(1,10);
            setUsers(res);
      })()
    }, []);

  const handleDelete = async (id) => {
    // let res =await removeItem(id);
    // if(res){
    //  let data = await jobListRequest(1,10);
    // //  setJobs(data);
    // }
    // else{
    //   toast.error("Something went wrong!");
    // }
  };

  const handleRole = async(id,role)=>{
      let res = await updateRole(id,role);
      if(res){
        let data = await userListRequest(1,10);
        setUsers(data);
      }
  }

    return (
        <div className="sm:max-w-7xl w-full mx-auto p-4 mt-10 bg-white shadow rounded-lg">
        <h2 className="sm:text-2xl text-center sm:mt-0 mt-2 mb-4 text-xl font-semibold text-gray-600">
          All Users
        </h2>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <div className="my-6">
          <table className="sm:max-w-7xl w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Mobile</th>
                 <th className="p-3 text-left">Email</th>
                <th className="p-3 text-center">Update Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {Array.isArray(users) &&
                users.map((user, index) => (
                  <UserTable key={index} user={user} index={index} handleDelete={handleDelete} handleRole={handleRole} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;