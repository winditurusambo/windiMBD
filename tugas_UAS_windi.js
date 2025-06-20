
// === Key-Value Model (Versi Berbeda) ===
use keyValueDB

db.kvCollection.insertMany([
  { "key": "nama", "value": "Rina" },
  { "key": "usia", "value": 24 },
  { "key": "kota", "value": "Surabaya" },
  { "key": "hobi", "value": "Memasak" },
  { "key": "status", "value": "Alumni" }
])

// === Wide-Column Model (Versi Berbeda) ===
use wideColumnDB

db.users.insertMany([
  {
    "id": 1,
    "nama": "Lina",
    "umur": 23,
    "alamat": {
      "kota": "Medan",
      "kode_pos": "20151"
    },
    "kontak": { "email": "lina@mail.com" }
  },
  {
    "id": 2,
    "nama": "Doni",
    "umur": 27,
    "pekerjaan": "UI Designer"
  },
  {
    "id": 3,
    "nama": "Mega",
    "hobi": ["menari", "fotografi"]
  },
  {
    "id": 4,
    "nama": "Raka",
    "alamat": {
      "kota": "Makassar"
    }
  },
  {
    "id": 5,
    "nama": "Winda",
    "umur": 30,
    "kontak": {
      "telepon": "082345678901"
    }
  }
])
