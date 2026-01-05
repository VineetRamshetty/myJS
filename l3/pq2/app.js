let arr=["january", "july", "march", "august"];
console.log(arr);
arr.shift();
let temp=arr.shift();
arr.unshift("june");
arr.unshift(temp);
console.log(arr);