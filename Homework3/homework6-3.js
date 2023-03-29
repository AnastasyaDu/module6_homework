function getSum(a){
    return function(b){
        return a+b;
    }
}
let func=getSum(7);
console.log (func(0), func(1),func(2) );
console.log (getSum(4)(2), getSum(3)(2), getSum(15)(2))

