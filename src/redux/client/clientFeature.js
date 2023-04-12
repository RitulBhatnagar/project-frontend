import axios from "axios"
const BACKEND_URL = process.env.BACKEND_API_URL;
const API_URL = `http://localhost:1000/api/client`
// create the Client
const createClient = async(formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
}
// get all the client
const getClient = async() => {
  const response = await axios.get(API_URL);
  return response.data;
}
// update the Client

const updateClient = async(id, formData) => {
    const response = await axios.patch(`${API_URL}/${id}`, formData);
    return response.data;
}

// delete the Client
const deleteClient = async(id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
// get the single Client
const getSingleClient = async(id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

const ClientService = {createClient, deleteClient, updateClient, getSingleClient, getClient}
export default ClientService;