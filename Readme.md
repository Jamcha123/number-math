number-math is a JavaScript math package.

How to use: 
1.

    ```
            npm i number-math
    ```
2. 

    ```
            import <anyname1> from './index.js'
            const <anyname2> = new <anyname1>();
    
            <anyname2>.somefunction();  
    ```
Function description: 
1. getFactorial(<integer>) // Gets the factorial of the number

2. isPrimes(<integer>) // Is the number a prime

3. getFactors(<integer>) // Gets all of the factors of that number

4. isRational(<integer>) // Is number Rational or Irrational 

5. changeBases(<integer>, <integer>) // Changes a given number to a given base like base2 01001 for example

6. getFib(<integer>) // Gets the Fibonacci sequence within a given limit

7. isAbundant(<integer>) // Is number abundant or deficient

8. getCollatz(<integer>) // Gets the Collatz sequence ends at 1

9. negativeExponent(<integer>, <integer>) // Gets the negative exponent of a given base and exponent

10. isInteresting(<integer>) // Is a number Interesting or Uninteresting, check out the Interesting number Paradox on Wikipedia
[text](https://en.wikipedia.org/wiki/Interesting_number_paradox)

11. floating(<float>, <float>) // This function will make it so 0.1 + 0.2 actually equals 0.3 and not 0.30000004

12. isEven(<integer>) // Is Number even or odd

13. pentagonNumber(target) // Gets a list of all pentagon numbers from 1 - target 

14. repunitNumber(target) // Gets the repunit number of the given target

15. triangleNumber(target) // Gets the list of all triangle number between 1 - target 

16. fizz(target) // Gets the fizzbuzz sequence from 1 - target

17. amicableNumber(target) // Is number amicable or not

18. perfectNumber(target) // Is number perfect or not

19. pythagoreanTriplets(targets) // Gets the products of the pythagorean triplets if there are any else return -1

20. TruncatedNumbers(target) // remove the last digit of the number until only one remains, returns a list of all numbers