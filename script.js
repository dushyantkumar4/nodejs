// let n=5;
// for (let i=0;i<=n;i++){
//     console.log("hello",i);
// }
// console.log(process.argv);
// let args=process.argv;
// for(let i=0;i<args.length;i++){
//     console.log("hello to",args[i]);
// }

// const someValue=require("./Fruits");
// console.log(someValue[0].name);

// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("welcome",args[i]);
// }
// const someValue=require("./math");
// console.log(someValue);
// const info=require("./Fruits");
// console.log(info[0].value);

// const figlet=require("figlet");

// figlet("1 2 3 4 5 .", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });
// import{sum,pi}from "./math.js";

// console.log(sum(1,2));
// console.log(pi);
// import { generate} from "random-words";
// console.log(generate());
// console.log(process.argv);
// let args=process.argv;

// for(let i=2;i<args.length;i++){
//     console.log(`hello: ${args[i]}`);
// }

const someValue=require("./math");
console.log(someValue);