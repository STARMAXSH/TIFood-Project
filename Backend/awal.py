import database
import model

db = database.SessionLocal()

sample_products = [
    model.Product(nama_produk= "Pop Mie", kategori= "Makanan", harga= 5000,stok= 10),
    model.Product(nama_produk= "Beng Beng", kategori= "Makanan", harga= 2000, stok= 20),
    model.Product(nama_produk= "Teh Pucuk", kategori= "Minuman", harga= 3000, stok= 5),
    model.Product(nama_produk= "Roti", kategori= "Makanan", harga= 3000, stok= 0)
]

db.add_all(sample_products)
db.commit
db.close

print ("Data sample berhasil ditambahkan")