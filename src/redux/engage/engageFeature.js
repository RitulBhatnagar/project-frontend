import axios from "axios"
const BACKEND_URL = process.env.BACKEND_API_URL;
const API_URL = `http://localhost:1000/api/engage`
// create the Engage
const createEngage = async(formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
}
// get all the enetity
const getEngage = async() => {
  const response = await axios.get(API_URL);
  return response.data;
}
// update the Engage

const updateEngage = async(id, formData) => {
    const response = await axios.patch(`${API_URL}/${id}`, formData);
    return response.data;
}

// delete the Engage
const deleteEngage = async(id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
// get the single Engage
const getSingleEngage = async(id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

const EngageService = {createEngage, deleteEngage, updateEngage, getSingleEngage, getEngage}
export default EngageService;