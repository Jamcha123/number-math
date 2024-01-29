export function getFactorial(num){

    let target = 1;

    let index = 1;

    for(let i = 0; i < num; i++){

        target = target * index;

        index += 1;

    }

    console.log("factorial of " + num + " is " + target);

}

export function isAbundent(num){

    let target = 0 

    for(let i = 1; i != num; i++){

        if (num % i == 0){

            target += i;

        }

    }

    if (target > num){

        console.log(num + " is abundent");

    }else{

        console.log(num + " is deficient");

    }

}

export function isPrime(num){

    for(let i = 1; i != 2; i++){

        const nums = []

        for(let j = 1; j != i+1; j++){

            if (i % j == 0){

                nums.push(j)

            }

        }

        if (nums.length == 2){

            console.log(num + " is a prime")

        }else{

            console.log(num + " is not a prime")

        }

    }

}

export function isRational(num){

    if (Math.sqrt(num) == Math.floor(Math.sqrt(num))){

        console.log(num + " is a Rational number");

    }else{

        console.log(num + " is a Irrational number")

    }

}

export function getMultiples(num){

    const multi = []

    for(let i = 1; i < num+1; i++){

        if(num % i == 0){

            multi.push(i);

        }

    }

    console.log(multi);

}

export function negativeExponets(num){

    console.log(1 / Math.pow(num, num))

}
export function PalindromeCounter(string){
    const text = [string]
    let counter = 0;
    for(let j = 0; j != text[0].length; j++){
        for(let i = j; i != text[0].length; i++){
            if (text[0][i] == text[0][j] && j != i){
                counter += 1
            }
        }
    }
    console.log(counter)
}