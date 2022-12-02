import axios from "axios";

export const signUpApi = async (dataForm) => {
  try {
    const res = await axios.post("/user/signup", dataForm);
    if (res) return true;
  } catch (error) {
    return false;
  }
};

//google login
export const googleApi = async (dataForm) => {
  try {
    const res = await axios.post("/user/google", dataForm);
    if (res) return true;
  } catch (error) {
    return false;
  }
};
