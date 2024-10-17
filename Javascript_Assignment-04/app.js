var image = document.getElementById("img");
var picLinks = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/pic3.jpg", "./images/pic4.jpg", "./images/pic5.jpg"];
var count = 0;

function changeImg(value) {
   
    if (value === "-") {
        count--;
        if (count < 0) {
            count = picLinks.length - 1;
        }
    } else {
        count++;
        if (count >= picLinks.length) {
            count = 0; 
        }
    }
    image.setAttribute("src", picLinks[count]);
}

setInterval(() => changeImg("+"), 2000);
