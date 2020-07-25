let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "img/1.jpg") {
        myImage.setAttribute("src", "img/2.jpg");
    } else if (mySrc === "img/2.jpg") {
        myImage.setAttribute("src", "img/3.jpg");
    } else {
        myImage.setAttribute("src", "img/1.jpg");
    }
};
