// Cari sepatu dengan harga lebih dari 500 ribu
db.sepatu.find({ harga: { $gt: 500000 } });
