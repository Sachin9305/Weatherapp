import axios from 'axios';


const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    const url = `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`;
    console.log(url);
    try {
        let response = await axios.get(url);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}