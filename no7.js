// Cari sepatu yang berwarna hitam dan ukuran lebih dari 40
db.sepatu.find({
  $and: [
    { warna: "Hitam" },
    { ukuran: { $gt: 40 } }
  ]
});
