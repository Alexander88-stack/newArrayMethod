
const ages = [20,10,33,64,82,97,43,21,18,50];
console.log(ages);
const Multiplicar = ages.map((elem,index,arr) => {
    return elem * 4;
});

console.log(Multiplicar);