import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/tutorials";

const getAll = () => {
    return axios
      .get(API_URL, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
};
  
const get = (id) => {
    return axios
      .get(API_URL, 
        {headers: authHeader(),
        id: id 
      })
      .then((response) => {
        return response.data;
      });
};

const create = (data) => {
    return axios.post(API_URL, { data });
};
  
const update = (id, data) => {
    return axios.put(API_URL, { id, data });
};

const deleteTutorial = (id) => {
    return axios.delete(API_URL, { id });
};

const deleteAll = () => {
    return axios.delete(API_URL);
};

const findByTitle = (title) => {
    return axios.get(API_URL + "?title=", { title });
};

export default {
    getAll,
    get,
    create,
    update,
    deleteTutorial,
    deleteAll,
    findByTitle,
};
