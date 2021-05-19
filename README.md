
# Reciprocal
## reciprocal / timbal balik js
ini merupakan suatu algoritma yang di mana algoritma ini di buat untuk mengatasi suatu permasalahan yang bersangkutan dengan array of object di js dan recrusif function/looping yang mempush suatu nilai dengan jumlah yang sama ke dalam array yang sama, sehingga akan terbentuk nilai duplikat yang memiliki bentuk yang mirip tapi
nilai property yang beda dan ini merupakan suatu masalah yang di temukan pada seleku

## prinsip dan pemecahan masalah
untuk mengatasi hal ini saya membuat algoritma yang di sebut Reciprocal atau timbal balik yaitu suatu algoritma yang mampu mencari kemiripan dari 2 buah array of object dan akan di lakukan pertukaran data dari array yang akan di ubah dengan array yang mengubah, algoritma ini menggunakan bentuk query berupa teks yaitu 
### contoh 
```sql
porperty from a to b
```

## cara menggunakan module ini
untuk menggunakan module ini anda cukup mengikuti contoh kode berikut ini
```js

import Reciprocal from "./Reciprocal"

let array1 = [{
  nama: "budi",
  umur: 14,
  id: null
}];

let array2 = [{
  nama: "budi",
  umur: 20,
  id: null
}];

let hasil = Reciprocal(array1,array2,"id from a to b");
```

## penjelasan
di atas kita memiliki 2 buah array yaitu array1 dan array2 jika kita ingin array 1 dan 2 salin timbal balik maka kita harus memberikan suatu query yaitu "id from a to b" di mana "id" merupakan nama property yang akan di ubah sedangkan "from a to b" berarti kita menimbal balikan dari array yang berada di parameter pertama ke array yang ada di parameter ke 2
