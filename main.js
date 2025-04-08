// htmldan elemanlari cek 
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");


// menu btne tiklaninca navbar kismina class ekle cikar 
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});