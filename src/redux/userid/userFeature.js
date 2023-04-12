import axios from "axios"
const BACKEND_URL = process.env.BACKEND_API_URL;
const API_URL = `http://localhost:1000/api/user`
// create the user
const createuser = async(formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
}
// get all the enetity
const getuser = async() => {
  const response = await axios.get(API_URL);
  return response.data;
}
// update the user

const updateuser = async(id, formData) => {
    const response = await axios.patch(`${API_URL}/${id}`, formData);
    return response.data;
}

// delete the user
const deleteuser = async(id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
// get the single user
const getSingleuser = async(id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

const userService = {createuser, deleteuser, updateuser, getSingleuser, getuser}
export default userService;