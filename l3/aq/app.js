let arr=[7, 9, 0, -2];
let n=3;
let ans1=arr.slice(0, n);
console.log(ans1);

let ans2=arr.slice(-n);
console.log(ans2);

let str1=prompt("enter a string: ");
if(str1.length===0){
    console.log("empty");
}
else{
    console.log("not empty");
}

let str2="ApnaCollege";
let idx=4;
if(str2[idx]!=str2.toLowerCase()[idx]){
    console.log("not lowercase");
}
else{
    console.log("lowercase");
}

let str3=prompt("enter a string: ");
str3=str3.trim();
console.log(str3);

let arr2=['v', "apple", 28, 98, "jjjj"];
console.log(arr2.includes('v'));