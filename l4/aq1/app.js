let arr1=[1, 2, 3, 4, 5, 6, 2, 3];
console.log(arr1);
let num=2;
while(arr1.includes(num)){
    arr1.splice(arr1.indexOf(num), 1);
}
console.log(arr1);

let num1=prompt("enter a number: ");
num1=parseInt(num1);
let sum=0;
let cnt=0;
while(num1>0){
    cnt++;
    sum+=num1%10;
    num1=Math.floor(num1/10);
}
console.log(cnt);

console.log(sum);

let num2=prompt("enter a number: ");
num2=parseInt(num2);
let fac=1;
while(num2){
    fac*=num2;
    num2--;
}
console.log(fac);

let arr=[144, 24851, 97411215, 1564];
let mx=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>mx){
        mx=arr[i];
    }
}
console.log(mx);