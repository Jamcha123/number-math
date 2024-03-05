const error = (e) => {
    if (typeof(e) != "number"){
        throw new Error(e + " is not number")
    }
}
const primes = (e) => {
    if(e < 2){
        return false
    }
    for(let i = 2; i != Math.pow(e, 0.5)+1; i++){
        if(e % i == 0){
            return false
        }
    }
    return true
}
export default class numbers{
    getFactorial(num){
        console.log(error(num))
        let num1 = 1; 
        for(let i = 1; i != num+1; i++)[
            num1 *= i
        ]
        console.log(num1)
        return 0
    }
    isPrimes(num){
        console.log(error(num))
        for(let i = 2; i != (Math.pow(num, 0.5))+1; i++){
            if(num % i == 0){
                console.log(num + " Not a prime number")
                return false
            }
        }
        console.log("A prime")
        return true; 
    }
    getFactors(num){
        console.log(error(num))
        const arr = []
        for(let i = 1; i != num+1; i++){
            if(num %  i == 0){
                arr.push(i)
            }
        }
        let ans = ""
        arr.forEach((e) => {
            ans += e
            ans += " "
        })
        console.log(ans)
        return 0
    }
    isRational(num){
        console.log(error(num))
        if (Math.floor(Math.sqrt(num)) == Math.sqrt(num)){
            console.log(num + " is a rational number")
            return 0
        }
        console.log(num + " is a irrational number")
        return 0
    }
    changeBases(num, base){
        console.log(error(num) + "\n")
        console.log(error(base) + "\n")
        let num1 = num; 
        let num2 = num1.toString(base)
        console.log(num2)
        return 0
    }
    getFib(target){
        console.log(error(target))
        const fib = (limit, x, y) => {
            console.log(y)
            if(limit == 0){
                return x + y; 
            }else{
                fib(limit-1, y, x+y)
            }
        }
        return fib(target, 1, 1)
    }
    isAbundant(num){
        console.log(error(num))
        let num1 = 0
        for(let i = 1; i != num; i++){
            if(num % i == 0){
                num1 += i; 
            }
        }
        if(num1 > num){
            console.log(num + " is abundent")
            return 0
        }else{
            console.log(num + " is deficient")
            return 0; 
        }
    }
    negativeExponant(base, expo){
        console.log(error(base) + "\n")
        console.log(error(expo) + "\n")
        let target = 1 / Math.pow(base, expo)
        console.log(target)
        return 0
    }
    getCollatz(target){
        console.log(error(target) + "\n")
        const nums = []
        while(target != 1){
            nums.push(target)
            if(target % 2 == 0){
                target = target / 2
            }else{
                target = (3 * target) + 1
            }
        }
        nums.push(1)
        let ans = ""
        nums.forEach((e) => {
            ans += e + " "
        })
        console.log(ans)
        return 0
    }
    isInteresting(target){
        console.log(error(target) + "\n")
        let num = target
        let text = num.toString()
        
        let sums = 0
        for(let i = 0; i < text.length; i++){
            sums += Number.parseInt(text[i])
        }
        let powers = 1
        while(true){
            let num1 = Math.pow(sums, powers); 
            if(num1 > target){
                console.log(target + " is not interesting")
                return 0
            }
            if(num1 == target){
                console.log(target + " is interesting"); 
                return 0; 
            }
            powers += 1
        }
    }
    floating(a, b){
        if (Number.isInteger(a) == true || Number.isInteger(b) == true){
            throw new Error("not a float")
        }
        let num1 = Math.floor((a + b) * 10) / 10
        console.log(num1)
        return 0
    }
    isEven(target){
        console.log(error(target) + "\n")
        if(Number.isInteger(target / 2) == true){
            console.log("is even")
        }else{
            console.log("is odd")
        }
        return 0
    }
    pentagonNumbers(target){
        console.log(error(target) + "\n")
        let ans = " "
        for(let i = 0; i != target; i++){
            let pentagon = Math.floor(i * ((3 * i) - 1) / 2)
            ans += pentagon + " "
        }
        console.log(ans)
    }
    triangleNumbers(target){
        console.log(error(target) + "\n")
        let ans = ""
        for(let i = 0; i != target+1; i++){
            let nums = Math.floor(i * (i + 1) / 2); 
            ans += nums + " "; 
        }
        console.log(ans)
    } 
    repunitNumbers(target){
        console.error(error(target) + "\n")
        let ans = ""
        for(let i = 0; i != target; i++){
            ans += 1;
        }
        console.log(ans); 
    }
    fizz(target){
        console.log(error(target))
        let ans = ""
        for(let i = 1; i != target+1; i++){
            if(i % 3 == 0 && i % 5 == 0){
                ans += "FizzBuzz" + " "
            }
            else if(i % 3 == 0){
                ans += "Fizz" + " "
            }
            else if(i % 5 == 0){
                ans += "Buzz" + " "
            }
            else{
                ans += i + " "
            }
        }
        console.log(ans)
        return 0; 
    }
    amicableNumber(target){
        console.log(error(target))
        let num1 = 0
        for(let i = 1; i != target; i++){
            if(target % i == 0){
                num1 += i
            }
        }
        let num2 = 0; 
        for(let i = 1; i != num1; i++){
            if(num1 % i == 0){
                num2 += i
            }
        }
        if(num2 == target){
            console.log(target + " is amicable")
        }else{
            console.log(target + " is not amicable")
        }
        return 0   
    }
    perfectNumber(target){
        console.log(error(target))
        let num1 = 0
        for(let i = 1; i != target; i++){
            if(target % i == 0){
                num1 += i;  
            }
        }
        if(num1 == target){
            console.log(target + " is a perfect number"); 
        }else{
            console.log(target + " is not a perfect number"); 
        }
        return 0; 
    }
    pythagoreanTriplets(target){
        console.log(error(target))
        const arr1 = []
        for(let i = 1; i != target; i++){
            let a = i
            for(let j = 1; j != target; j++){
                let b = j; 
                let c = Math.pow(a, 2) + Math.pow(b, 2); 
                if(a + b + Math.pow(c, 0.5) == target && Math.pow(a, 2) + Math.pow(b, 2) == c){
                    arr1.push(a * b * Math.pow(c, 0.5)); 
                }
            }
        }
        let ans = ""
        arr1.forEach((e) => {
            ans += e + " "; 
        })
        if(ans.length == 0){
            console.log(-1)
        }else{
            console.log(ans)
        }
        return 0; 
    }
    TruncatedNumbers(target){
        let num1 = target
        console.log(error(num1))

        let ans = ""
        while(num1.toString().length != 1){
            ans += num1 + " "
            num1 = Math.floor(num1 / 10)
        }
        console.log(ans)
        return 0
    }
}