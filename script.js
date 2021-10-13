function changeBorder() {

    const inputTopLeft = document.querySelector("#topLeftValue");
    const inputTopRight = document.querySelector("#topRightValue");
    const inputBottomLeft = document.querySelector("#bottomLeftValue");
    const inputBottomRight = document.querySelector("#bottomRightValue");
   
    const box = document.querySelector(".box");

    box.style.borderTopLeftRadius = inputTopLeft.value + "px";
    box.style.borderTopRightRadius = inputTopRight.value + "px";
    box.style.borderBottomLeftRadius = inputBottomLeft.value + "px";
    box.style.borderBottomRightRadius = inputBottomRight.value + "px";

    

}