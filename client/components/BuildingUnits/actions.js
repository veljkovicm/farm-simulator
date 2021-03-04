import { API } from '../../libs'

export const submitFeedUnit = async (id) =>  {
  try {
    const body = { id };

    const response = await API({
      method: 'PATCH',
      path: '/units',
      body,
    });
    console.log({response});

    if (response.status === 200) {
      
      return response.data;

    } else {
      // return error message from server


      // return { message: response.data.payload.message }
    }
  } catch (error) {
    console.error(error);
  }
}