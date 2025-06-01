db.createCollection("sepatu_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "warna", "ukuran", "harga", "kategori", "stok"],
      properties: {
        nama: {
          bsonType: "string",
          description: "Harus berupa nama sepatu"
        },
        warna: {
          bsonType: "string",
          description: "Harus berupa warna sepatu"
        },
        ukuran: {
          bsonType: "int",
          minimum: 30,
          maximum: 50,
          description: "Ukuran harus antara 30 sampai 50"
        },
        harga: {
          bsonType: "int",
          minimum: 10000,
          description: "Harga harus minimal 10.000"
        },
        kategori: {
          bsonType: "string",
          description: "Kategori harus berupa string"
        },
        stok: {
          bsonType: "int",
          minimum: 0,
          description: "Stok tidak boleh negatif"
        }
      }
    }
  }
});
