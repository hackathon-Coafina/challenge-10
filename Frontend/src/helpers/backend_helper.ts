import { APIClient } from "./api_helper";
import { Endpoints } from "./url_helper";

const api = new APIClient()

// Upload Image Method
export const uploadImage = (file: any) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
    return api.put(Endpoints.uploadImage, file, config)
    .then((response) => {
		return response
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
}