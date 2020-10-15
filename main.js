
const ages = [20,10,16,64,17,97,43,21,18,50];
console.log(ages);
const MenorEdad = ages.filter((elem,index,arr) => {
    return elem < 18;
});

console.log('Solo menores de edad:', MenorEdad);
