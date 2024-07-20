import axios from 'axios';

export const uploadImage = async (file: any, path: string) => {
  try {
    console.log('Upload Image', file);
    const formData = new FormData();
    formData.append('filename', file);
    formData.append('destination', 'images');
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const url = `http://localhost:3000/${path}`;

    const result = await axios.post(url, formData, config);
    console.log('Result: ', result);
  } catch (error) {
    console.error(error);
  }
};
