document.addEventListener('DOMContentLoaded', function() {
    const imageElements = document.getElementsByClassName("projectImg");
    const imageArray = Array.from(imageElements); // Convert the HTMLCollection to an array

    const buttons = document.getElementsByClassName("overlay");
    const buttonArray = Array.from(buttons); // Convert the HTMLCollection to an array


    imageArray[0].addEventListener("mouseover", (event) => {
        event.target.style.filter = "blur(5px)";
        buttons[0].style.visibility = "visible";
    });

    imageArray[0].addEventListener("mouseout", (event) => {
        event.target.style.filter = "blur(0px)";
        buttons[0].style.visibility = "hidden";
    });

    imageArray[1].addEventListener("mouseover", (event) => {
        event.target.style.filter = "blur(5px)";
        buttons[1].style.visibility = "visible";
    });

    imageArray[1].addEventListener("mouseout", (event) => {
        event.target.style.filter = "blur(0px)";
        buttons[1].style.visibility = "hidden";

    });

    imageArray[2].addEventListener("mouseover", (event) => {
        event.target.style.filter = "blur(5px)";
        buttons[2].style.visibility = "visible";

    });

    imageArray[2].addEventListener("mouseout", (event) => {
        event.target.style.filter = "blur(0px)";
        buttons[2].style.visibility = "hidden";

    });
});