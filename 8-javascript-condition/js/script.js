let number = prompt("Masukkan Angka ")

if (number == "") {
  alert("Harap Masukkan Angka");
} else if (number % 2 == 0){
  alert("Bilangan Genap")
} else {
  alert("Bilangan Ganjil")
}

let isHujan = prompt("Apakah hari ini hujan? ")

if (isHujan == "ya") {
  alert("Harap bawa payung!")
} else if (isHujan == "tidak") {
  alert("Tidak perlu bawa payung")
} else {
  alert("Cuaca cerah")
}

let bilangan = 'angka'
let mod = bilangan % 2

switch (mod) {
  case 0:
    alert(`${bilangan} adalah angka genap`)
    break;
  case 1:
    alert(`${bilangan} adalah angka ganjil`)
    break;
  default:
    alert("Hanya menerima angka")
    break;
}