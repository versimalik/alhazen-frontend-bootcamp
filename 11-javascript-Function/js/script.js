//function without argumen
function sayHello(){
    console.log("Hello gais")
}
sayHello()

//function with argumen
// function siwaBerprestasi(name){
//     // console.log(name + "adalah siswa berprestasi")
//     alert(name + "adalah siswa berprestasi")
// }
// siwaBerprestasi("Refina ")

function greet(name){
alert("SELAMAT DATANG " + name)
}
let yourName = prompt("Siapa nama kamu?")
greet(yourName)

//function return
function pertambahan(x, y){
    hasil = x + y;
    return hasil;
}
result = pertambahan(4,5);
console.log(result)

