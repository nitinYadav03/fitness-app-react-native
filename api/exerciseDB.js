import axios from 'axios';
import { RapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
  const options = {
    method: 'GET',
    url,
    params,
    headers: {
      'X-RapidAPI-Key': '8bf077ad5fmsh60df19d136b8d26p1d66a0jsn95b09e238b3f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error occurred: "+error.message);
  }
};

export const fetchExercisesByBodyparts = async(bodyParts) => {
    const url = `${baseUrl}/exercises/bodyPart/${bodyParts}`;
    let data = await apiCall(url)
    return data
}
