for (let num = 0; num < 10; num+=2) { // num = num + 2
  console.log(num)  
}

let fruits = ["Apple", "Durian", "Banana", "Cherry"]
for (let num in fruits) {
  console.log(fruits[num])
}

for (let fruit of fruits) {
  console.log(`I Like ${fruit}`)
} 

let number = 0

// while (number < 10){
//   console.log(`Number ${number}`)
//   number++;
// }

do {
  console.log(`Number ${number}`)
  number++;
}
while (number < 10)