cpoint.js is a JavaScript package that has already built pointers.

How to use:
1. install cpoint.js

    ``` 
        npm i cpoint.js
    ```

2. add the JS to your JS file: 
    
    ```
        import point from './index.js'
        const pointer = new point(); 

        pointer.<chose a function>(); 
    ```

3. add the CSS to your CSS file
    
    ```
        .items{
            position: fixed; /* don't change fixed */
            width: 3em;
            height: 3em;
            margin: auto;
            padding: 0;
            border: white solid 10px;
            opacity: 0.25;
            filter: drop-shadow(0px 0px 10px white);
            background-color: transparent;
        }
    ```


function description: 
1. squarePointer() // gets a Square Pointer 

2. circlePointer() // gets a Circle Pointer

enjoy the package