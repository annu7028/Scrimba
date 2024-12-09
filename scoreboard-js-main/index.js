//HOME SCORES
let hScore = 0
let hEl = document.getElementById("home-score")
hEl.textContent = hScore

function hPlus1(){
    hScore += 1
    hEl.textContent = hScore
    leader()
}

function hPlus2(){
    hScore += 2
    hEl.textContent = hScore
    leader()
}

function hPlus3(){
    hScore += 3
    hEl.textContent = hScore
    leader()
}

//GUEST SCORES
let gScore = 0
let gEl = document.getElementById("guest-score")
gEl.textContent = gScore

function gPlus1(){
    gScore += 1
    gEl.textContent = gScore
    leader()
}

function gPlus2(){
    gScore += 2
    gEl.textContent = gScore
    leader()
}

function gPlus3(){
    gScore += 3
    gEl.textContent = gScore
    leader()
}

//new game function
let period = 1
let periodEl = document.getElementById("period")
periodEl.textContent = period

function newGame(){
    period = 1
    periodEl.textContent = period
    hScore = 0
    hEl.textContent = hScore
    gScore = 0
    gEl.textContent = gScore
    leader()
}

//new period function
function newPeriod(){
    //display the period
    period += 1
    periodEl.textContent = period
}

//Highlgiht Leader
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
function leader(){
    if (hScore > gScore){
        homeEl.style.textDecoration = "underline overline"
        guestEl.style.textDecoration = "none"
    }
    else if(hScore < gScore){
        guestEl.style.textDecoration = "underline overline"
        homeEl.style.textDecoration = "none"
    }
    else{
        homeEl.style.textDecoration = "none"
        guestEl.style.textDecoration = "none"
    }
}