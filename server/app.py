import uvicorn
from fastapi import FastAPI
import models
from database import engine
from router import user, auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Litebite backend api")

app.include_router(user.router)
app.include_router(auth.router)


@app.get("/")
async def home():
    return {"Message": "Welcome to Litebite"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)