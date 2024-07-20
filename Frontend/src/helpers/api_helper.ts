import axios from 'axios';

// defaults
axios.defaults.baseURL = 'http://127.0.0.1:8000';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';

// intercepting to capture errors
axios.interceptors.response.use(
  function (response: any) {
    return response.data ? response.data : response;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message: any;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      case 404:
        message = 'Sorry! the data you are looking for could not be found';
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url: any, params: any) => {
    let response: any;

    let paramKeys: any = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url: any, data: any) => {
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url: any, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: any, data: any, config?: any) => {
    const resp = axios.put(url, data, config);
    return resp;
  };
  /**
   * Delete
   */
  delete = (url: any, config: any) => {
    return axios.delete(url, { ...config });
  };
}

export { APIClient };
