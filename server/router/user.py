from fastapi import APIRouter, status, HTTPException, Depends
from sqlalchemy.orm import Session

import models
import schemas
import utils
from database import get_db

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post("", status_code=status.HTTP_201_CREATED, response_model=schemas.User)
async def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    already_exist = db.query(models.User).filter_by(email=user.email).first()
    if already_exist:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="User already exists!")
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    new_user = models.User(**user.model_dump())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


@router.get("/{id}", response_model=schemas.User)
async def get_user(id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()
    if user:
        return user
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with id: {id} does not exist")
