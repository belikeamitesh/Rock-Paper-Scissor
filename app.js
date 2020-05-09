let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
function getcomputerchoice() {
    const choices=["r","p","s"];
    const randomno=Math.floor(Math.random()*3);
    return choices[randomno];
}
function toword(letter){
    if (letter=="r") return "Rock";
    if (letter=="s") return "Scissor";
    return "Paper";
}
function win(user,computer) {
    userscore++;
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const smalluser="user".fontsize(3).sup();
    const smallcomputer="comp".fontsize(3).sup();
    result_p.innerHTML=toword(user)+smalluser + " beats " + toword(computer)+smallcomputer + ". You Win...!!";
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("green-glow")
    },300 );
}

function loose(user,computer) {
    computerscore++;
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const smalluser="user".fontsize(3).sup();
    const smallcomputer="comp".fontsize(3).sup();
    result_p.innerHTML=toword(user)+smalluser + " looses to " + toword(computer)+smallcomputer + ". You Loose...!!";
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("red-glow")
    },300 );
}

function draw(user,computer) {
    const smalluser="user".fontsize(3).sup();
    const smallcomputer="comp".fontsize(3).sup();
    result_p.innerHTML=toword(user)+smalluser + " equals " + toword(computer)+smallcomputer + ". Its a Draw..!!";
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("grey-glow")
    },300 );
}


function game(userchoice){
    const cc=getcomputerchoice();
    switch(userchoice+cc) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,cc);
            break;
        case "ps":
        case "sr":
        case "rp":
            loose(userchoice,cc);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,cc);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',() => {
        game("r");
    })

    paper_div.addEventListener('click',() => {
        game("p");
    })

    scissor_div.addEventListener('click',() => {
        game("s")
    })
}
main();