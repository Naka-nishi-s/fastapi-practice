from fastapi import FastAPI
from routers import users,items

app  = FastAPI()

@app.get("/")
async def roo():
  return {"message": "Hello World!"}

@app.post("/am")
async def am():
  return {"Good": "GGG"}

app.include_router(users.router,prefix="/api")
app.include_router(items.router,prefix="/api")
