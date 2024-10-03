import { useState, useEffect } from "react";
import axios from "axios";
import { userInfoRequest } from "../apiRequest/userApiRequest";

function useInfo() {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userInfoRequest();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  return { data, loading, error };  
}

export default useInfo;
