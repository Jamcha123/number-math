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
                console.log(num + " Not a prime number")
                return false
            }
        }
        console.log("A prime")
        return true; 
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
        let num1 = num; 
        let num2 = num1.toString(base)
        console.log(num2)
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
    isInteresting(target){
        if(typeof(target) != "number"){
            throw new Error("not a number")
        } 
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
}
const myThing = new numbers()
myThing.floating(0.1, 0.9)