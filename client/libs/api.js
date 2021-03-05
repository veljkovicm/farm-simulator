import axios from 'axios';

const apiCall = async ({
  method,
  path,
  headers = {},
  body,
  params,
}) => {
  try {
    const url = path;

    const response = await axios({
      baseURL: 'http://localhost:5000/',
      url,
      params,
      method,
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
      data: body,
    });
    const { status, data } = response;

    return { data, status };
  } catch (error) {
    console.warn(error);
    if (!error.response) {
      return {
        data: {
          message: 'Service Unavailable',
          statusCode: 503,
        },
        status: 503,
      };
    }

    const { response } = error;
    const { status, data } = response;

    return { data, status };
  }
};

export default apiCall;
