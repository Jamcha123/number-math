const error = (e) => {
    if (typeof(e) != "number"){
        throw new Error(e + " is not number")
    }
    return 0 + ", ignore this zero, just a little bit of error handling"
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

}