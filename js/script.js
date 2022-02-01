// слайдер
$(".docs").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

// Pop-up для сертификатов
let close = document.querySelector(".close");
let popImage = document.querySelector(".popup");
let overlayPopUp = document.querySelector(".overlay");


let docPop = [...document.querySelectorAll(".popup-doc")].forEach(item => { 
    
    item.addEventListener("click", ()=>{  

        let imagePopUp = item.querySelector("img").getAttribute('src');

        popImage.style.backgroundImage = "url(" + imagePopUp + ")";

        overlayPopUp.style.visibility = "visible";
        overlayPopUp.style.opacity = "1"
        close.onclick = function(){
            overlayPopUp.style.visibility = "hidden";
            overlayPopUp.style.opacity = "0"
      }
      });
});

//прячущаяся шапка
function scrollTo(event) { // слежу за прокруткой колеса
    let header = document.querySelector("header")
    if (event.deltaY > 20 || event.keyCode === 40) { //если колесо крутится вниз или нажата кнопка вниз
        header.classList.add("out")
    }
    else if (event.deltaY < -20 || event.keyCode === 38) { // если колесо крутится вверх или нажата кнопка вверх
        header.style.background = "linear-gradient(transparent, #fff )"
        header.classList.remove("out")
    }
}

if (navigator.appVersion.indexOf("Mac")!==-1) {
    document.onwheel = throttle(scrollTo, 300);
} else {
    document.onwheel = scrollTo;
}

document.addEventListener("keyup", function (event) { // обработчик события клавиш
    scrollTo(event);
});



//бургер

let burger = document.querySelector(".burger");
let menu = document.querySelector("nav").style.left;

burger.onclick = function(){
    if (menu === "0"){ 
        document.querySelector("nav").style.left = "-70vw"
        menu="-70vw";

    }
    else {
        document.querySelector("nav").style.left = "0"
        menu = "0";
    }
    
}