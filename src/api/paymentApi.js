import axios from "axios";

export const paymentApi = async (dataForm) => {
  try {
    console.log(dataForm);
    const res = await axios.post("/order/payment", dataForm);

    if (res.status===200) return true;
  } catch (error) {
    
    return false;
  }

};

export const getOrder = async (id) => {
  const response = await axios.get(`/order/payment/${id}`);
  if (response?.status === 200) {
  return response?.data;
  }
  return null;
  };

export const getRating = async (id) => {
  const response = await axios.get(`/order/rating/${id}`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];

};