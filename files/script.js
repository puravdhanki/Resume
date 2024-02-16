
var typed = new Typed(".text", {
    strings: ["Programming" , "Photography" , "Digital Poster Designer" , "Freelancer" , "Website Tester" , "Web Development" , "Video Editor" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1500,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})