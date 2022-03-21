const message = document.querySelector(".message");
const overlay = document.querySelector("#overlay");
const form_message = document.querySelector(".form-message");

const inbox = document.querySelector(".inbox-view");
const contentinbox = document.querySelector(".content-inbox");
// const inboxactive = document.querySelector(".inbox-active");

const btnX = document.querySelector(".header-mess i");
const btncancel = document.querySelector(".btncancel");

const inboxsumary = document.querySelectorAll(".inbox-sumary");
const infomain = document.querySelectorAll(".info-main");

const imgbars = document.querySelector(".imgbars");
const navbarleft = document.querySelector(".navbar-left");

const imgpen = document.querySelector(".header-body .imgpen");

message.addEventListener("click", () =>{
    form_message.classList.toggle("showmess");
    // overlay.classList.toggle("show");
});


inbox.addEventListener("click", () =>{
    contentinbox.classList.toggle("showinbox");
});
console.log(inbox);

btnX.addEventListener("click", () =>{
    form_message.classList.toggle("showmess");
    // overlay.classList.toggle("show");
});

btncancel.addEventListener("click", () =>{
    form_message.classList.toggle("showmess");
    // overlay.classList.toggle("show");
});



inboxsumary.forEach((item, index) =>{

    inboxsumary[index].addEventListener("click", function(){
        console.log(document.querySelector(".inbox-sumary").getAttribute("style"));
        document.querySelector(".showinfo").classList.remove("showinfo");
        // if(document.querySelector(".inbox-sumary").getAttribute("style")=='background-color: aquamarine;'){
        //     document.querySelector(".inbox-sumary").removeAttribute("style")
        // }
        // this.style.backgroundColor = 'aquamarine';
        infomain[index].classList.add("showinfo");
        document.querySelector(".inboxactive").classList.remove("inboxactive");
        this.classList.add("inboxactive");
    })
})

imgbars.addEventListener("click", () => {

    navbarleft.classList.add("show-nav");
    overlay.classList.toggle("show");

});

imgpen.addEventListener("click", () =>{
    form_message.classList.toggle("showmess");
    // overlay.classList.toggle("show");
});

overlay.addEventListener("click", () =>{
    overlay.classList.remove("show");
    navbarleft.classList.remove("show-nav");
});





