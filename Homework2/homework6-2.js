function primeNumber(num){
    if ((num<2) || (num>1000)){
        return 'Данные неверны';
    } {
    for (let i=2; i<num; i++){
        if (num % i==0){
            return 'непростое число';
        }
    }
        return 'простое число'
    }

}
console.log(primeNumber(7));
console.log(primeNumber(1500));