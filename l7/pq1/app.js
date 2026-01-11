let sqr=(n)=>{
    return n*n;
}
console.log(sqr(7));

let id=setInterval(()=>{
    console.log("Hello World!");
}, 2000);
setTimeout(()=>{
    clearInterval(id);
}, 10000);