var stoptime = true;
var sec = 0;
var min = `00`;
var time = 0;

document.getElementById("start").addEventListener("click", () => {
    startTimer();
});
document.getElementById("stop").addEventListener("click", () => {
    stopTimer();
});
document.getElementById("restart").addEventListener("click", () => {
    restartTimer();
})

function startTimer() 
{
    if (stoptime == true) 
    {
      stoptime = false;
      timerCycle();
    }
}
function restartTimer()
{
    stopTimer()
    time = 0;
    sec = `00`;
    min = `00`;
    document.getElementById("timer").textContent =`${min}:${sec}`;
}
function stopTimer() 
{
    if (stoptime == false) 
    {
      stoptime = true;
    }
}
  
function timerCycle() 
{
    if (stoptime == false) 
    {
        time = time + 1;
        if(time < 10)
        {
            sec = `0${time}`;
        }
        else
        {
            sec = `${time}`;
        }
        if(sec == 60)
        {
            sec = `00`;
            time = 0;
            min = parseInt(min) + 1;
            if(min < 10)
            {
                min = `0${min}`;
            }
            else
            {
                min = `${min}`;
            }
        }
        
        
        document.getElementById("timer").textContent =`${min}:${sec}`;
    
        setTimeout(timerCycle, 1000);
    }
}