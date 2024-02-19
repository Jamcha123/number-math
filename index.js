export default class numbers{
    getFactorial(num){
        if(typeof(num) != "number"){
            throw new Error("not a number")
        }
        let num1 = 1; 
        for(let i = 1; i != num+1; i++)[
            num1 *= i
        ]
        console.log(num1)
        return 0
    }
    isPrimes(num){
        if(typeof(num) != "number"){
            throw new Error("not a number")
        }
        for(let i = 2; i != (Math.pow(num, 0.5))+1; i++){
            if(num % i == 0){
                console.log(num + " is a Prime number")
                return 0
            }
        }
        console.log("Not a prime")
        return 0; 
    }
    getFactors(num){
        if(typeof(num) != "number"){
            throw new Error("not a number")
        }
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
        if(typeof(num) != "number"){
            throw new Error("not a number")
        }
        if (Math.floor(Math.sqrt(num)) == Math.sqrt(num)){
            console.log(num + " is a rational number")
            return 0
        }
        console.log(num + " is a irrational number")
        return 0
    }
    changeBases(num, base){
        if(typeof(num) != "number" || typeof(base) != "number"){
            throw new Error("not a number")
        }
        let ans = ""
        while (num != 0){
            let num1 = num % base; 
            ans += num1.toString() + ans
            num = Math.floor(num / base)
        }
        console.log(ans)
        return 0
    }
    getFib(target){
        if(typeof(target) != "number"){
            throw new Error("not a number")
        }
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
        if(typeof(num) != "number"){
            throw new Error("not a number")
        }
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
        if (typeof(base) != "number" || typeof(expo) != "number"){
            throw new Error("not a number")
        }
        let target = 1 / Math.pow(base, expo)
        console.log(target)
        return 0
    }
    getCollatz(target){
        if(typeof(target) != "number"){
            throw new Error("not a number")
        }
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
}