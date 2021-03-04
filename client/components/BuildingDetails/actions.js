import { API } from '../../libs'

export const submitNewUnit = async (buildingId) => {
  try {
    const body = { buildingId };

    const response = await API({
      method: 'POST',
      path: '/units',
      body,
    });
    console.log({response});

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