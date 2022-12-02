import axios from "axios";

export const checkRating = async (data) => {
  //console.log(data)
  const response = await axios.post(`/order/checkRating`,data);
    return response?.data?.success;
};

export const getUser = async () => {
  const response = await axios.get(`/user`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};
export const getUserId = async (id) => {
  const response = await axios.get(`/user/${id}`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};
export const getAllProduct = async () => {
  const response = await axios.get(`/product`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};

export const getProductId = async (id) => {
  const response = await axios.get(`/product/${id}`);
  if (response?.status === 200) {
    return response?.data;
  }
  return null;
};

export const getMakeUp = async () => {
  const response = await axios.get(`/product/makeup`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};

export const getHair = async () => {
  const response = await axios.get(`/product/hair`);
  if (response?.status === 200) {
    return response?.data;
  }
  return [];
};

export const getSkin = async () => {
  const response = await axios.get(`/product/skin`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};

export const getBody = async () => {
  try {
    const response = await axios.get(`/product/body`);
    if (response?.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const getBestSeller = async () => {
  const response = await axios.get(`/product/bestseller`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};

export const getLatest = async () => {
  const response = await axios.get(`/product/latest`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};

export const getBlog = async () => {
  const response = await axios.get(`/blog`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};
export const submitRating = async (id,User,Rate) => {
  if(User)
  {  
      const response = await axios.post(`/order/submitRate`,{id,User,Rate});
  if (response?.status === 200) {
    return response.data;
  }
  return [];
  }
  else
  return [];

};
