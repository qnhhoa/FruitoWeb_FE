import axios from "axios";

export const loginApi = async (dataForm) => {
  try {
    const res = await axios.post("/user/login", dataForm);
    if (res) return true;
  } catch (error) {
    return false;
  }
};
export const loginGoogle = async (dataForm) => {
  try {
    console.log("run")
    const res = await axios.post("/user/login", dataForm);
    if (res) return true;
  } catch (error) {
    return false;
  }
};