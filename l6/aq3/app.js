function func(arr){
    let ans="";
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>ans.length){
            ans=arr[i];
        }
    }
    return ans;
}
let countries=["Austrailia", "Germany", "United States of America"];
console.log(func(countries));