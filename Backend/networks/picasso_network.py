# Python
from typing import Annotated

#FastApi
from fastapi import APIRouter, File

# Controllers
from controllers.picasso_controller import PicassoController

picasso = APIRouter(prefix='/picasso')

@picasso.put("/upload", tags=["picasso"])
async def upload_image(file: Annotated[bytes, File()]):
    # Instance Controller and passed image in params
    controller = PicassoController(file)
    response = controller.find_author()

    # Get Data
    author = response[0]
    type = response[1]

    return {
        "name": author,
        "type": type,
    }