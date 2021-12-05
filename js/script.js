var readMore = document.querySelector(".read-more")
var readLess = document.querySelector(".read-less")
var textCont = document.querySelector(".text .cont")
readMore.onclick = function() {
    readMore.style.display = "none";
    textCont.classList.add("active");
    readLess.style.display = "flex";
}
readLess.onclick = function() {
    readMore.style.display = "flex";
    readLess.style.display = "none";
    textCont.classList.remove("active");
}

var showMore = document.querySelector(".show-more")
var catalog = document.querySelector(".catalog-more")
showMore.onclick = function() {
    showMore.style.display = "none";
    catalog.classList.toggle("active")
}


var selectForm=document.querySelectorAll(".select-form")
var drMenu=document.querySelectorAll("")