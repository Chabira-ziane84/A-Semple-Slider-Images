let slides=Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount=slides.length;
let currentSlide=1;
let slideNumber=document.querySelector("#slide-number");
let prevbutton=document.getElementById("prev");    
let nextButton=document.getElementById("next");
let indicators=document.getElementById("indicators");
prevbutton.onclick=prevSlide;
nextButton.onclick=nextSlide;
// create ul and li for list slides
let ul=document.createElement("ul");
ul.id="pagination-ul";
indicators.appendChild(ul);
for (let i = 1;i<=slidesCount;i++) {
    let li=document.createElement('li');
    li.setAttribute("data-index",i);
    li.textContent=i;
    ul.appendChild(li);
}
let createdUl=document.getElementById("pagination-ul");
let listLi=document.querySelectorAll("#pagination-ul li");
listLi.forEach(li => {
    li.onclick=function() {
    //    currentSlide= +this.textContent;
       // or
    currentSlide=+this.getAttribute("data-index");
       checker();
    }
});
function nextSlide() {
if(currentSlide===slidesCount) {
    return false;
} else {
    currentSlide++;
    checker();
}
}
function prevSlide() {
    if(currentSlide===1) {
        return false;
    } else {
        currentSlide--;
        checker();
    }
}
checker()
function checker() {
    slideNumber.textContent=`Slide #${currentSlide} of ${slidesCount}`;
    removeAllactive()
    slides[currentSlide - 1].classList.add("active");
    createdUl.children[currentSlide - 1 ].classList.add("active");
    if(currentSlide===1) {
        prevbutton.classList.add("disabled");
    } else {
        prevbutton.classList.remove("disabled");
    }
    
    if(currentSlide===slidesCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }

}
function removeAllactive() {
    slides.forEach(img => {
        img.classList.remove("active");
    });
    listLi.forEach(li => {
        li.classList.remove("active");
    });
}