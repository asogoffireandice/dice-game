const button = document.querySelector("button");
    button.addEventListener("click", () =>{
        window.location.reload();
    });




window.addEventListener('load', function() {
    document.getElementsByClassName("dice");
    if(sessionStorage.getItem('hasVisited') === null){
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        sessionStorage.setItem('hasVisited', 'true');
    }else{
    var ran1 = (Math.random()*6)+1;
    ran1 = Math.floor(ran1);

    var ran2 = (Math.random()*6)+1;
    ran2 = Math.floor(ran2);

    
function leftdice(){
    
    if(ran1 === 1){
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    }else if(ran1 === 2){
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    }else if(ran1 === 3){
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    }else if(ran1 === 4){
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    }else if(ran1 === 5){
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    }else{
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }
}


function rightdice(){
    if(ran2 === 1){
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    }else if(ran2 === 2){
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    }else if(ran2 === 3){
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    }else if(ran2 === 4){
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    }else if(ran2 === 5){
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    }else{
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }
}


function text(){
    if(ran1 > ran2){
        document.querySelector("h1").textContent = "Player 1 wins✨";
    }else if(ran2 > ran1){
        document.querySelector("h1").textContent = "Player 2 wins✨";
    }else if(ran1 === ran2){
        document.querySelector("h1").textContent = "Draw!🟰";
    }
    
}
leftdice();
rightdice();
text();

    }
});

