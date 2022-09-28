 const hourEl = document.getElementById("hour")
 const minuteEl = document.getElementById("minutes")
 const secondEl = document.getElementById("seconds")

 function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(()=>{
        updateClock();
    },1000)
}


updateClock();