const popUp = document.getElementById("click_me");
popUp.addEventListener("click", function(){
    const myContainer = document.getElementById("box");
    myContainer.classList.add("active");
})
const closeUp = document.getElementById("osas")
closeUp.addEventListener("click", function(){
    const myContainer = document.getElementById("box")
    myContainer.classList.remove("active");
})