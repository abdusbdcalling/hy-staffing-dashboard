import toast from "react-hot-toast";
import CryptoJS from "crypto-js";

class helper {
  errorMsg(status) {
    if (status === 401) {
      toast.error("Unathourized");
    } else if (status === 500) {
      toast.error("Internal Server Error!");
    } else if (status === 403) {
      toast.error("Forbidden!");
    } else toast.error("Something went worng!");
  }

  successMsg(msg) {
    toast.success(msg);
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setRole(role) {
    localStorage.setItem("role", role);
  }

  getRole() {
    const encryptedRole = localStorage.getItem("role");
    if (encryptedRole) {
      const decryptedRole = CryptoJS.AES.decrypt(
        encryptedRole,
        import.meta.env.VITE_CRYPTO_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedRole);
    }
    return null;
  }

  setUserInfo(details) {
    localStorage.setItem("userInfo", JSON.stringify(details));
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

}

export const {
  errorMsg,
  successMsg,
  setToken,
  getToken,
  setRole,
  getRole,
  setUserInfo,
  getUserInfo,
  removeSession
} = new helper();
