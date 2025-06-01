db.sepatu.bulkWrite([
  {
    insertOne: {
      document: {
        nama: "Nike Air Force",
        warna: "Hitam",
        ukuran: 42,
        harga: 1300000,
        kategori: "Streetwear",
        stok: 10
      }
    }
  },
  {
    insertOne: {
      document: {
        nama: "Vans Old Skool",
        warna: "Hitam",
        ukuran: 41,
        harga: 900000,
        kategori: "Skate",
        stok: 8
      }
    }
  },
  {
    updateOne: {
      filter: { nama: "Nike Air Force" },
      update: { $inc: { stok: 5 } }
    }
  }
]);
