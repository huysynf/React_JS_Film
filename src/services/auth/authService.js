import axios from '../../config/axios';

export const loginRequest = async (data)=> {
  try{
     return await axios.post('/login', data);
  }catch ({response}) {
    throw response;
  }
}
