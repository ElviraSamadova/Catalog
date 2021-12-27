var scrollElem = document.getElementById("scrollToTop");
window.onscroll = function() {
        if(this.scrollY>100){
            scrollElem.classList.add("active-elem")
        }
        else{
            scrollElem.classList.remove("active-elem")
        }
    }

scrollElem.onclick=function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


var list=document.querySelector(".list-btn")
var grid=document.querySelector(".grid-btn")
var collection=document.querySelector(".collection")
var catalogList=document.querySelector(".catalog-c")

// SHOW MORE 
var showMore = document.querySelector(".show-more")
var catalogMore = document.querySelector(".catalog-more")
var catalogMoreList= document.querySelector(".catalog-more-list")
showMore.onclick = function() {
    showMore.style.display = "none";
    catalogMore.classList.toggle("active")
}

list.onclick=function() {
    collection.classList.add("hidden")
    catalogList.classList.add("active")
    list.style.color="black";
    grid.style.color="#cccfd6";
    catalogMore.style.display="none";
    showMore.onclick = function() {
        showMore.style.display = "none";
        catalogMoreList.classList.toggle("active")
    }
}


grid.onclick=function() {
    collection.classList.remove("hidden")
    catalogList.classList.remove("active")
    list.style.color="#cccfd6";
    grid.style.color="black";
}


// READ MORE - READ LESS
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



// CHAT START 
var closeChat = document.querySelector("#chat .close-chat")
var miniChat = document.querySelector(".mini-chat")
var chat = document.querySelector("#chat")
var myInp = document.querySelector(".message-box")
var main = document.querySelector("main")
closeChat.onclick = function () {
    chat.classList.remove("active")
}
miniChat.onclick = function () {
    chat.classList.add("active")
}
myInp.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        if (myInp.value.trim() != "") {
            if (myInp.value[0].toUpperCase() == myInp.value[0]) {
                // console.log(myInp.value);
                var msDiv = document.createElement("div")
                msDiv.className = "message support"
                var ptag = document.createElement("p")
                ptag.innerText = myInp.value

                msDiv.appendChild(ptag)
                main.appendChild(msDiv)
                var pTime = document.createElement("p")
                pTime.className = "time"
                var dt = new Date()
                // console.log(dt);
                pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
                msDiv.appendChild(pTime)
                myInp.value = " "
            } else {
                var msDiv = document.createElement("div")
                msDiv.className = "message user"
                var ptag = document.createElement("p")
                ptag.innerText = myInp.value

                msDiv.appendChild(ptag)
                main.appendChild(msDiv)
                var pTime = document.createElement("p")
                pTime.className = "time"
                var dt = new Date()
                // console.log(dt);
                pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
                msDiv.appendChild(pTime)
                myInp.value = " "
            }
            main.scrollTop = main.scrollHeight
        }


    }
})
// CHAT END 