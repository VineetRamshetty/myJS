function getLarger(arr, num){
    let ans=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(getLarger([1, 2, 129719, 3, 4, 5, 6, 3, 9, 2, 7777], 7));