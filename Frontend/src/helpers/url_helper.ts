// VERSION API
export const API_VERSION = "/api/v1"

// PREFIX
export const PREFIX_PICASSO = "/picasso"

// UPLOAD IMAGE
export const UPLOAD_IMAGE = "/upload"

export class Endpoints {
    // Images
    static readonly uploadImage =`${API_VERSION}${PREFIX_PICASSO}${UPLOAD_IMAGE}`;

}