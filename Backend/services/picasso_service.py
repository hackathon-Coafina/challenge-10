class PicassoService:
    def __init__(self, file: bytes) -> None:
        self.file = file
        self.author: str | None = "The author"
        self.type_picture: str | None = "The Picture Type"

    def __str__(self) -> str:
        return f"Author is: {self.author} and your type pincture is {self.type_picture}"