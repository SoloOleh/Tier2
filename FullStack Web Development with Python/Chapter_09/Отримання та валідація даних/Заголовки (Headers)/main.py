# from fastapi import FastAPI, Header

# app = FastAPI()


# @app.get("/headers")
# async def read_headers(user_agent: str = Header(default=None)):
#     return {"User-Agent": user_agent}


# Всі заголовки разом

# from fastapi import FastAPI, Request

# app = FastAPI()


# @app.get("/all-headers")
# async def read_all_headers(request: Request):
#     return {"headers": dict(request.headers)}

# Додаткові параметри валідації
from fastapi import FastAPI, Header

app = FastAPI()


@app.get("/custom-header")
async def read_custom_header(
    x_custom: str = Header(default=None, min_length=3, max_length=50)
):
    return {"X-Custom": x_custom}
