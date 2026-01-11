function arrConcat(arr){
    let str="";
    for(let i=0; i<arr.length; i++){
        str+=arr[i];
    }
    return str;
}

let arr=['v', 'i', "ne", 'e', 't'];

console.log(arrConcat(arr));