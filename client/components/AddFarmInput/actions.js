import { API } from '../../libs';

export const submitFarm = async (name) => {

  try {
    const body = { name };

    const response = await API({
      method: 'POST',
      path: '/farms',
      body,
    });

    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
