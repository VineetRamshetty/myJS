function getRandom(s, e){
    return Math.floor(Math.random()*(e-s+1))+s;
}
console.log(getRandom(3, 7));