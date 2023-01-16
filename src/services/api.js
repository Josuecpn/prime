import axios from "axios"; 

// BASE_DA_URL = https://api.themoviedb.org/3/
// URL_DA_API = movie/now_playing?api_key=3f7343cf387b01c4c21cee02a55c7470&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api