import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
const APIKEY = import.meta.env.VITE_SOME_KEY

const getAll = () => {
    const request = axios.get(`${baseUrl}api/all`)
    return request.then(response => response.data.map(country => country.name.common))
}

const getCountry = ({country}) => {
    console.log("received country", country)
    const request = axios.get(`${baseUrl}/api/name/${country}`)
    return request.then(response => response.data)
}

const getWeather = ({latLong}) => {
    console.log("latlong 3", latLong)
    console.log("lat and long", latLong[0], latLong[1])
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0]}&lon=${latLong[1]}&units=metric&appid=${APIKEY}`)
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0]}&lon=${latLong[1]}&units=metric&appid=${APIKEY}`)
    return request.then(response => response.data)
}

export default {getAll, getCountry, getWeather}