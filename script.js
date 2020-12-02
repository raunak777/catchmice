var chance=5;
var x;
var count=0;
var highscore;
if(document.cookie.length==0)
{ 
    document.cookie="HScore=0";
    highscore=0;
    document.getElementById("hgscore").innerHTML=0;
}
else{
    var ca=document.cookie.indexOf('=');
    highscore=document.cookie.substring(ca+1);
    document.getElementById("hgscore").innerHTML=highscore;
    console.log(highscore);
}

function miceShow()
{
    x = Math.floor((Math.random() * 16)+1);
    var doc=document.getElementById('dv'+x);
    doc.classList.add('rat');
    doc.classList.remove('mouse');
}

function miceHide()
{
    var doc=document.getElementById('dv'+x);
    doc.classList.add('mouse');
    doc.classList.remove('rat');
   
}
function setTime()
{
    setTimeout(miceShow,50);
    setTimeout(miceHide,500);
}
function cont()
{ 
    countdown();
    setInterval(setTime,1200);
    setTimeout(stop,32000);
    
}
function score(m)
{
    if(m==x)
    {
        count++;
    }
    else
    {
        chance--;
    }
    if(chance>=1)
    {
        document.getElementById("chance").innerHTML=chance;
    }
    else{

        document.getElementById('start').style.display="none";
        document.getElementById("hidebtn").style.display="none";
        document.getElementById("over").style.display="block";
        document.getElementById("over").innerHTML="Game Over <br> Your Score is: "+count;
        document.getElementById("bckbtn").style.display="block"; 
    }
    document.getElementById("scr").innerHTML=count;
    
}


function stop(){
    
    document.getElementById('start').style.display="none";
    document.getElementById("hidebtn").style.display="none";
    document.getElementById("over").style.display="block";
    document.getElementById("over").innerHTML="Game Over <br> Your Score is: "+count;
    document.getElementById("bckbtn").style.display="block"
    if(count>highscore)
    {
        document.cookie="HScore="+count;
    }
}

function back(){
    window.location.href="index.html";
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function countdown() {
    var fiveMinutes = 60*.5;
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}
