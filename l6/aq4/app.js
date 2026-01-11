function func(str){
    let vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cnt=0;
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            cnt++;
        }
    }
    return cnt;
}
let str="aaaioerplkjhnu";
console.log(func(str));