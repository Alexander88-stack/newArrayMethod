
const ages = [20,10,16,64,17,97,43,21,18,50];
console.log(ages);

const SumaTodos = ages.reduce((total,elem,index,arr) => {
    return total + elem ;
});



console.log('Esta es la suma de todos:',SumaTodos);
