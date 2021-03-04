import { API } from '../../libs';

export const submitFarm = async (name) => {

  //  handle letter capitalization before submit
  try {
    const body = { name };

    const response = await API({
      method: 'POST',
      path: '/farms',
      body,
    });


    if (response.status === 201) {
      
      return response.data;

    } else {
      // return error message from server


      // return { message: response.data.payload.message }
    }
  } catch (error) {
    console.error(error);
  }
}