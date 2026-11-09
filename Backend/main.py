from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy import func
from sqlalchemy.orm import Session
import database
import model
import skema

model.Base.metadata.create_all(bind=database.engine)

app = FastAPI (title="TIFood Backend API")

@app.post("/api/auth/register")
def registrasi_user(user_data : skema.RegisterUser, db: Session = Depends(database.get_db)):
    if not user_data.email.endswith("polije.ac.id"):
        raise HTTPException(
            status_code = 400,
            detail = "Email harus menggunakan akun SSO Polije"
        )

    new_user = model.User(
        **user_data.model_dump()
    )

    try:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return {"message":"Registrasi Berhasil, Silahkan Login"}
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Gagal melakukan registrasi: {str(e)}"
        )

@app.post("/api/auth/login")
def registrasi_user(user_data : skema.LoginUser, db: Session = Depends(database.get_db)):
    username = user_data.username.strip().upper()
    print(username)
    usernamedb = db.query(model.User).filter(func.upper(model.User.nama) == username).first()
    print(usernamedb)

    if usernamedb and usernamedb.nama.upper() == username:
        return {"msg" : "username sama dengan yang ada di database"}
    else:
        return {"msg" : "gak sama"}

@app.get("/api/products")
def get_products(
    search:str = Query(None),
    kategori:str = Query(None),
    db: Session = Depends(database.get_db)
):
    query = db.query(model.Product)
    if search:
        query = query.filter(model.Product.nama_produk.contains(search))
    if kategori and kategori != "Semua":
        query = query.filter(model.Product.kategori == kategori)

    products = query.all ()

    result = []
    for p in products:
        status_stok = "Habis" if p.stok == 0 else ("Menipis" if p.stock <5 else "Tersedia")
        result.append({
            "id": p.id,
            "nama_produk": p.nama_produk,
            "kategori": p.kategori,
            "harga": p.harga,
            "stok": p.stok,
            "status_stok": status_stok,
            "peringatan_stok": p.stok <5 and p.stok >0
        })
    return result

@app.put("/api/products/{product_id}")
def update_product(
    product_id: int,
    data: skema.ProductUpdate,
    db: Session = Depends(database.get_db)
    ):

    if data.harga <5 or data.stok <0:
        raise HTTPException(status_code=400, detail="Harga dan stok tidak boleh negatif.")
    
    product = db.query(model.Product).filter(model.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")

    product.harga = data.harga
    product.stok = data.stok
    db.commit()
    return{"message":"Perubahan berhasil disimpan"}
