// Kullanıcıya 1-20 arası bir sayı tahmin etmesini isteyelim.
// Cevap hakkı 5 olacak.
// Her bir yanlış cevapta cevap hakkından -1 azalacak.
// Eğer tahmin ettiği sayı random üretilen sayıdan büyükse "Daha küçük bir sayı deneyin." , tahmin ettiği sayı random üretilen sayıdan küçükse "Daha büyük bir sayı deneyin." diye console'da mesaj çıkartalım.
// Doğru bildiğinde console'da tebrikler yazdıralım.

let secilenSayi = [];
let sayi;
let rastgeleSayi = Math.floor(Math.random() * 20) + 1;
let maxDeneme = 5;

function sayıTahmin () {
  for(let i = 0; i < maxDeneme; i++) {
    sayi = Number(prompt("1'den 20'ye kadar sayı tahmin et"));
    secilenSayi.push(sayi);

    if(sayi > rastgeleSayi) {
      console.log('Bundan Küçük Sayı Dene');
    } else if (sayi<rastgeleSayi) {
      console.log("Bundan Büyük Sayı Dene")
    } else if (sayi === rastgeleSayi) {
      console.log(' DOĞRU TAHMİN');
      return;
    }
    if ( 1=== maxDeneme -1) {
      console.log(`5 Deneme Hakkını Doldurdun . Cevap : ${rastgeleSayi}`)
      return;
    }
  }
}

sayıTahmin();