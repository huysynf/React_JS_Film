import axios from 'axios';
import store from '../app/store';
import {config} from 'dotenv';

const instance = axios.create({
  baseURL: 'http://localhost/api/',
});
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Accept'] = 'application/json';

instance.interceptors.request.use(config => {
      let accessToken = store.getState()?.auth?.accessToken;
      if (accessToken != '') {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    ({response}) => {
      return response;
    },
);

instance.interceptors.response.use(
    response => response,
    ({response}) => {
      let refreshToken = localStorage.getItem('refresh');
      if (response.status === 401 && refreshToken != '') {
        //get refresh to ken
      }
      
      return response;
    },
);
export default instance;