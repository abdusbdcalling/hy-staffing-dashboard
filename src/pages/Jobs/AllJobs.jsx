import { useEffect, useState } from 'react';
import JobsTable from '../../components/jobs/JobsTable';
import { jobListRequest } from '../../apiRequest/jobApiRequest';
import { removeItem } from '../../utils/modals/removeItem';
import toast from 'react-hot-toast';

const AllJobs = () => {

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

    useEffect(() => {
      (async()=>{
            let res = await jobListRequest(1,10);
            setJobs(res);
      })()
    }, []);

  const handleDelete = async (id) => {
    let res =await removeItem(id);
    if(res){
     let data = await jobListRequest(1,10);
     setJobs(data);
    }
    else{
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="sm:max-w-7xl w-full mx-auto p-4 mt-10 bg-white shadow rounded-lg">
      <h2 className="sm:text-2xl text-center sm:mt-0 mt-2 mb-4 text-xl font-semibold text-gray-600">
        All Jobs
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="my-6">
        <table className="sm:max-w-7xl w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-center">Location</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {Array.isArray(jobs) &&
              jobs.map((job, index) => (
                <JobsTable key={index} job={job} index={index} handleDelete={handleDelete} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
