// Rata-rata harga sepatu per kategori
db.sepatu.aggregate([
  {
    $group: {
      _id: "$kategori",
      rataHarga: { $avg: "$harga" }
    }
  }
]);
