const point = (posX, posY) => {
    setTimeout(() => {
        var y = document.getElementsByClassName("items"); 
        document.body.removeChild(y[0])
    }, 100)
    var x = document.createElement("div"); 
    x.classList.add("items"); 
    x.style.top = posY + "px";
    x.style.left = posX + "px";
    document.body.appendChild(x); 
}
export default class pointers{
    squarePointer(){
        window.addEventListener("pointermove", (e) => {
            let posX = e.clientX; 
            let posY = e.clientY;
            point(posX, posY) 
            var x = document.getElementsByClassName("items");
            for(let i = 0; i < x.length; i++){
                x[i].style.borderRadius = 0 + "%"; 
            }
        })
    }
    circlePointer(){
        window.addEventListener("pointermove", (e) => {
            let posX = e.clientX; 
            let posY = e.clientY;
            point(posX, posY);  
            var x = document.getElementsByClassName("items");
            for(let i = 0; i < x.length; i++){
                x[i].style.borderRadius = 100 + "%"; 
            }
        })
    }
}