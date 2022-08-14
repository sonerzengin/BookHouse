
import axios from 'axios'




export const register = async (input) => {
  const { data } = await axios.post(`URL`, input)
return data;
}


