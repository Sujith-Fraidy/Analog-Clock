const hrs=document.querySelector(".hrs")
const min=document.querySelector(".min")
const sec=document.querySelector(".sec")

function updateTime(){
    const time=new Date();
    const second=time.getSeconds()/60;
    const minute=(second+time.getMinutes())/60;
    const hour=(minute+time.getHours())/12;
    hrs.style.setProperty('--rotation',hour*360)
    min.style.setProperty('--rotation',minute*360)
    sec.style.setProperty('--rotation',second*360)
}
updateTime();
setInterval(updateTime,1000)