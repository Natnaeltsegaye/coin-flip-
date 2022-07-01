let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
const status = document.querySelector("#statu");

let heads = 0;
let tails = 0;


flipBtn.addEventListener("click", () => {
     let i= Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
     setTimeout(function(){
         coin.style.animation= "spin-Heads 3s forwards";
     }, 100);
     heads++;
 }
else{
    setTimeout(function(){
        coin.style.animation= "spin-tails 3s forwards";
    },100);
    tails++;
    disableButton();
}
setTimeout(updateStats,3000);


    
});
function updateStats(){
    document.querySelector("#heads-cout").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-cout").textContent = `Tails: ${tails}`;
}
     function disableButton() {
   flipBtn.disabled = true;
     setTimeout(function(){
         flipBtn.disabled= false;

     },3000)
 }
 resetBtn.addEventListener("click", () =>   {
     
         coin.style.transform = "rotatex(0)";
         heads = 0;
         tails = 0;
         updateStats();

     })
     
