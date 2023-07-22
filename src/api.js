import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASEURL
const API_KEY = process.env.REACT_APP_APIKEY
export const getMovieList = async()=>{
    const movie = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
   return movie.data.results
}
export const searchMovie = async (q)=>{
    const search = await axios.get('q')
}