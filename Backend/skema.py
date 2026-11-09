from pydantic import BaseModel
from typing import Optional

class RegisterUser(BaseModel):
    nama : str
    nim_nip : str
    email : str
    password : str
class LoginUser(BaseModel):
    username : Optional[str]
    password : str
class ProductUpdate(BaseModel):
    harga: int
    stok: int
