from sqlalchemy import Column, Integer, String, Enum
from database import Base

class Product(Base):
    __tablename__ ="products"
    id = Column(Integer, primary_key=True, index=True)
    nama_produk = Column(String, index=True)
    kategori = Column(String)
    harga = Column(Integer)
    stok = Column(Integer)

class User(Base):
    __tablename__="users"
    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String)
    nim_nip = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column (String, default = "Pembeli")