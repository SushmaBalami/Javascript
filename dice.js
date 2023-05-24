let randomNumber1=Math.floor(Math.random()*6)+1 //1-6
let randomImage="dice "+randomNumber1+".png" //dice1.png-dice6.png
let randomImageSource=randomImage //dice1.png-dice6.png

document.querySelector('.img1').setAttribute('src', randomImageSource)

let randomNumber2=Math.floor(Math.random()*6)+1 //1-6
let randomImage2="dice "+randomNumber2+".png" //dice1.png-dice6.png
let randomImageSource2=randomImage2 //dice1.png-dice6.png

document.querySelector('.img2').setAttribute('src', randomImageSource2)

if(randomNumber1>randomNumber2){
    document.querySelector('h2').innerHTML="player one wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h2').innerHTML="player two wins"
}
else{
    document.querySelector('h2').innerHTML="Draw"
}