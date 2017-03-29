function WordCount(str) { 

  //1. Buat str yang berisi kumpulan kata-kata menjadi sebuah string array gunakan 
  //fungsi split
 
  str = str.split(" ");
  console.log(str);
  //2. Buat sebuah variabel yang berisi angka 0 yg nanti akan di tambahkan 
  //sesuai dari kata- kata yang akan di hitung jumlah nya
  var angka =0;
  
  //3. Buat pengulangan dari total length dari string array yang diterima
  for (var i =0; i <str.length; i++){
    angka++;
  }
  return angka;
  //4. Didalam pengulangan nanti akan di lakulan penambahan Variabel kosong pada
     // tahap 2 yang telah kita buat sebelumnya   
}
   
// keep this function call here 
// WordCount(readline());
console.log(WordCount("hghguuua ghhghg hbhjjhgf"));