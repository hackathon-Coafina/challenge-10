# FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Network
from networks.picasso_network import picasso

app = FastAPI()

origins = [
    '*'
]


@app.get("/")
async def root():
    return {"message": "Hello World"}


# Routers FastAPI
app.include_router(picasso, prefix='/api/v1')

# Middlewares
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
