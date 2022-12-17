// Vendor
import axios from 'axios';

// Src
import { Config } from '../config/config';
import AxiosConfig from './axiosConfig';

const hestiaApi = new AxiosConfig(
  axios.create({
	  baseURL: Config.BACK_END_URL,
  }),
);

export default hestiaApi;
