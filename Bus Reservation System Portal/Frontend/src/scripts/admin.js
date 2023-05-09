const bus = document.querySelector(".box1").addEventListener("click",()=>{
    console.log("I am bus");
    window.location.href = "busmenu.html";
})

const reservation = document.querySelector(".box2").addEventListener("click",()=>{
    console.log("I am reservation");
    window.location.href = "reservation.html";
})

const route = document.querySelector(".box3").addEventListener("click",()=>{
    console.log("I am route");
    window.location.href = "adminRoute.html";
})

const feedback = document.querySelector(".box4").addEventListener("click",()=>{
    console.log("I am feedback");
    window.location.href = "adminFeedback.html";
})

const user = document.querySelector(".box5").addEventListener("click",()=>{
    console.log("I am user");
    window.location.href = "adminUser.html";
})