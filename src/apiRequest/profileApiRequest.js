import axios from "axios";

export async function updateProfileRequest(data){
   console.log(data);
  try{
    let res = await axios.put('/api/v1/updateProfile',data);
    if(res.status === 200){
        return true
    }
    else{
        return false;
    }
  }
  catch(e){
    return false;
  }
}