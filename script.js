
const burger = document.querySelector('.burger');
const nav_ul = document.querySelector('nav ul')
const nav_li = document.querySelectorAll('nav li')
const headers = document.querySelector('.header-section')


// for fade in and out 
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")


burger.addEventListener('click', ()=> {
    nav_ul.classList.toggle('active');
    nav_li.forEach(li => {
        li.classList.toggle('active1');
    });
});

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
}

const appearOnScroll = new IntersectionObserver( 
    function(entries, appearOnScroll){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return
            } else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions );

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})


//  For Typing Effect


const cursorSpan = document.querySelector('.cursor')
const typedTextSpan = document.querySelector('.typed-text')
const textArray = ["Bishal","a Student","a Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


console.log(textArray[textArrayIndex])

function type(){
 if(charIndex < textArray[textArrayIndex].length){
   if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type,typingDelay);
  }else{
    cursorSpan.classList.remove("typing");
     setTimeout(erase, newTextDelay);
    
  }
}


function erase(){
  if(charIndex > 0){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent =  textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,erasingDelay);
  }else{
    cursorSpan.classList.add("typing");
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100)
  }
}

window.addEventListener("load",function(){
  if(textArray.length)  type(type, newTextDelay + 250);
})

// Form Error
function formError(){
    const sorryForm = document.querySelector(".contact-form form p").style.display="block";
}

// Readme transition effect

const readMe = document.querySelector(".readme button");
const readMeSpan = document.querySelector(".readme span");



readMe.addEventListener("mouseenter", () =>{
  // readMeSpan.style.transform="rotate(360deg)";
  console.log("Mouse has entered")
});