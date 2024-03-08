//List Warna menggunakan variable
// let color1="blue";
// let color2="black";
// let color3="orange";
// console.log(color1);
// console.log(color2)
// console.log(color3)
//array menggunakan kurung siku
let color = ["orange", "black", "blue", "yellow"];
// color.pop()//menghapus item array paling belakang
// color.push("purple")//menambahkan item baru di paling belakang
// color.splice(1,2)
// console.log(color)
console.log(color.length)
console.log(color.splice(1,2))



//array dengan ()
let fruits = new Array("pisang", "anggur", "apple")
fruits.shift()//menghapus item array paling depan
fruits.unshift("buah naga")//menambahkan item baru di paling depan
console.log(fruits)
console.log(fruits.length)


//array dengan tipe data yang berbeda
let campur = ["Hello", 1, 4.4];
console.log(campur)

