import axios from 'axios';

export const deboundGet = (url, config)=>{
  return new Promise((resolve, reject) => {
    axios.get(url,{
      data:config?.data,
      headers: config.headers,
    })
  });
}