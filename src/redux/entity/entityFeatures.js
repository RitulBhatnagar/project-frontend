import axios from "axios"
const BACKEND_URL = process.env.BACKEND_API_URL;
const API_URL = `http://localhost:1000/api/entity`
// create the entity
const createEntity = async(formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
}
// get all the enetity
const getEntity = async() => {
  const response = await axios.get(API_URL);
  return response.data;
}
// update the entity

const updateEntity = async(id, formData) => {
    const response = await axios.patch(`${API_URL}/${id}`, formData);
    return response.data;
}

// delete the entity
const deleteEntity = async(id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
// get the single entity
const getSingleEntity = async(id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

const entityService = {createEntity, deleteEntity, updateEntity, getSingleEntity, getEntity}
export default entityService;