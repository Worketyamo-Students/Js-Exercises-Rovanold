// ex2

// function isEven(number){
//     let c=number%2
//     if(c==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isEven(5))

// function findElement(table,v){
//     for(let i=0;i<table.length;i++){
//         if(table[i]==v){
//             return true;
//         }
//     }
//     return false;
// }
// const table =[1,22,33,10];
// console.log(findElement(table,43))



// ex3

// function fibonacci(n){
//     if(n==0)
//         {
//         return 0;
//     }
//     else if(n==1)
//     {
//         return 1;
//     }
//     else if(n!=0 && n!=1)
//     {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// console.log(fibonacci(7))



// ex4


// function factorial(n){
//     if(n==0)
//         {
//         return 0;
//     }
//     else if(n==1)
//     {
//         return 1;
//     }
//     else if(n!=0 && n!=1)
//     {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(2))

// const personne = [
//     {
//         femmes: {
//             fille: {
//                 age: 20
//             },
//             garcon: {
//                 age: 45,
//                 moy: [56, 78, 98, 34, {
//                     test: 78.67,
//                     name: {
//                         test: 'patate'
//                     }
//                 }]
//             }
//         }, 
//         homme: {

//         }
//     }
// ]
// let herve = personne[0].femmes.garcon.moy[4].name.test
// let l = herve.length
// let U = herve.toUpperCase()
// console.log (herve)
// console.log(l)
// console.log(U)

                                //    Excersice objets

var iphone = {
    name: "Iphone 16e",
    color: "Space black",
    price: "$900 or $54.95/mo. for 24 mo.*",
    processor: "A18 chip, 6-core GPU, 16-core Neural Engine",
    battery: "Up to 26 hours video playback",
    protection: "Water resistant to a depth of 6 meters for up to 30 minutes",
    charging: "Supports USB-C, Qi wireless charging up to 7.5W",
    capacity: "512GB",
    IsGood: true,

    info: () => {
        console.log (`Le ${iphone.name} ${iphone.color} de ${iphone.capacity} est à ${iphone.price}
             et est ${iphone.protection} avec une memoire de ${iphone.capacity}`)
    }
}

iphone.info()