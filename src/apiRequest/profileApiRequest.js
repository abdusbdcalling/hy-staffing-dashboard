import axios from "axios";

export async function updateProfileRequest(data){
    let postBody ={avatar:data.imageBase64,bio:data.bio}
  try{
    let res = await axios.put('/api/v1/updateProfile',postBody);
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