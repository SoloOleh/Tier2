# from fastapi import FastAPI, Path

# app = FastAPI()

# ...


# @app.get("/notes/{note_id}")
# async def read_note(
#     note_id: int = Path(description="The ID of the note to get", gt=0, le=10)
# ):
#     return {"note": note_id}

# from fastapi import FastAPI, Path, Query

# app = FastAPI()

# ...


# @app.get("/notes")
# async def read_notes(skip: int = 0, limit: int = Query(default=10, le=100, ge=10)):
#     return {"message": f"Return all notes: skip: {skip}, limit: {limit}"}


from fastapi import FastAPI, File, UploadFile
import pathlib

app = FastAPI()


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File()):
    pathlib.Path("uploads").mkdir(exist_ok=True)
    file_path = f"uploads/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())
    return {"file_path": file_path}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
