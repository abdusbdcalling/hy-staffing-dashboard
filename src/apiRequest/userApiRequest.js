import axios from "axios";
import { errorMsg, setRole, setUserInfo } from "../utils/helper";
import CryptoJS from "crypto-js";

export async function loginRequest(postData) {
  try {
    let res = await axios.post("/api/v1/login", postData);
    let data = await res.data.data;
    let role = await data.user.role;
    if (res.status === 200) {
      let ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(role),
        import.meta.env.VITE_CRYPTO_SECRET_KEY
      ).toString();

      setRole(ciphertext);
      setUserInfo()
      return true;
    } else {
      errorMsg("Something went wrong!");
      return false;
    }
  } catch (e) {
    errorMsg("Something went wrong!");
  }
}

export async function userListRequest(pageNo, perPage) {
  try {
    let res = await axios.get(`/api/v1/userList/${pageNo}/${perPage}`);
    let data = await res.data.data;
    if (res.status === 200) {
      return data.data;
    } else {
      return false;
    }
  } catch (e) {
    errorMsg(e.response.status);
  }
}


export async function userInfoRequest(){
  try{
    let res = await axios.get('/api/v1/userInfo');
    let data = res.data.data;
    if(res.status === 200){
     return data;
    }
    else{
      errorMsg("Something went wrong!");
     
    }
  }
  catch(e){
   console.log(e);
  }
}



export async function logoutRequest(){
  try{
    let res = await axios.post('/api/v1/logout');
    if(res.status === 200){
      return true;
    }
    else{
      return false
    }
  }
  catch(e){
    errorMsg("Internal error!!")
      return false;
  }
}