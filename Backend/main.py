# FastAPI
from fastapi import FastAPI

# Network
from networks.picasso_network import picasso

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


# Routers FastAPI
app.include_router(picasso, prefix='/api/v1')
