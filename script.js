let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("wynik");
const compScore_span = document.getElementById("wynikc");
const ka_div = document.getElementById("ka");
const no_div = document.getElementById("no");
const pa_div = document.getElementById("pa");
const compimg = document.querySelector(".blink_img");


function comrand(){
    const choices = ["1", "2", "3"];
    const rand = (Math.floor(Math.random() * 3));
    return choices[rand];
}


function main(){
    pa_div.addEventListener("click", function(){
        game("1");
    })
    ka_div.addEventListener("click", function(){
        game("2");
    })
    no_div.addEventListener("click", function(){
        game("3");
    })
    
}

function game(userChoice){
    swap();
    const compChoice = comrand();
    switch (userChoice + compChoice){
        case "12":
        case "23":
        case "31":
                win(userChoice, compChoice);
                break;
        case "11":
        case "22":
        case "33":
                draw(userChoice, compChoice);
                break;
        case "21":
        case "13":
        case "32":
                lose(userChoice, compChoice);
                break;
            
    }
    
}

function swap(){
    const compChoice = comrand();
    
    if (compChoice == "1"){
        document.getElementById("jpg_comp").src = "img/1.png";

    }
    
    else if (compChoice == "2"){
        document.getElementById("jpg_comp").src = "img/2.png";
        
    }
    
    else {
        document.getElementById("jpg_comp").src = "img/3.png";
       
    }
    
    
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    
}

function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
}

function draw(userChoice, compChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
}


window.onload = main();