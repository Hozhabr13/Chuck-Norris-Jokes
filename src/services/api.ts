import axios, { AxiosInstance } from 'axios';
import { CHUCK_NORRIS_BASE_URL } from 'constants/endpoints';

const Api: AxiosInstance = axios.create({
  baseURL: CHUCK_NORRIS_BASE_URL,
});

export default Api
