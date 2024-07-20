# Services
from services.picasso_service import PicassoService

class PicassoController:
    def __init__(self, file: bytes) -> None:
        self.file = file

    def find_author(self):
        service = PicassoService(self.file)
        return service.author, service.type_picture

    def __str__(self) -> str:
        return ''