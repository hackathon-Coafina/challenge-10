from typing import Annotated
from fastapi import APIRouter, File

picasso = APIRouter(prefix='/picasso')

@picasso.put("/upload", tags=["picasso"])
async def upload_image(file: Annotated[bytes, File()]):

    return {
        "name": "Picasso",
        "type": "Mano alzada",
    }