import axios from "axios";
import { errorMsg, setRole } from "../utils/helper";
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
