import axios from "axios";
import toast from "react-hot-toast";
import { errorMsg } from "../utils/helper";


export async function jobListRequest (pageNo,perPage){
  try{
    let res = await axios.get(`/api/v1/jobList/${pageNo}/${perPage}`);
    let data = await res.data.data;
    if(res.status === 200){
      return data.data;
    }
    else{
        return false;
    }
  }
  catch(e){
    errorMsg(e.response.status);
  }
}

export async function removeJobRequest(id){
  try{
    let res = await axios.delete(`/api/v1/removeJob/${id}`);
    if(res.status === 200){
      return true
    }
    else{
      errorMsg(res.status);
    }
  }
  catch(e){
    errorMsg(e.response.status);
  }
}