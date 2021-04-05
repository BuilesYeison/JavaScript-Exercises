function fizzbuzz(n){

    const divisible = (divisor, n) =>n%divisor===0;

    if(typeof n !== "number"){
        return "Error: the argument must be a number";
    }

    if(n===0){
        return n;
    }
    if(divisible(3,n) && divisible(5,n)){
        return 'fizzbuzz';
    }
    if(divisible(3,n)){
        return 'fizz';
    }
    if(divisible(5,n)){
        return 'buzz'
    }
    return n;
}

function printN(n){
    for(let i=0;i<=n;i++){
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}

printN(16)

module.exports = fizzbuzz;