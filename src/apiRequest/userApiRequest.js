import axios from "axios";
import { errorMsg, setToken, setUserInfo } from "../utils/helper";


export async function loginRequest(postData){
    try{
      let res = await axios.post('/api/v1/login',postData);
      let data = await res.data.data
      if(res.status === 200){
        setUserInfo(data.user);
        return true;
      }
      else{
        errorMsg(res.status);
        return false;
      }

    }
    catch(e){
     errorMsg(e.response.status);
    }
}

export async function userListRequest (pageNo,perPage){
  try{
    let res = await axios.get(`/api/v1/userList/${pageNo}/${perPage}`);
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