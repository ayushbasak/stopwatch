//jshint  esversion: 6
$(document).ready(()=>{
    var isStarted = 0;
    var startTime;
    var stopTime;
    var lastlaptime;
    var laptime;
    var elem = $("#timer");
    var start = $("#start");
    var lap = $("#lap");

    start.focus();
    start.click(()=>{
        if(!isStarted){
            start.css("background","#ff5c5c");
            isStarted = 1;
            start.text("STOP");
            let date = new Date();
            startTime = date.getTime();
            // updateTime(elem,startTime);
        }
        else{
            start.css("background","#a6dcef");
            isStarted = 0;
            start.text("START");
            let date = new Date();
            stopTime = date.getTime();

            elem.text(setChanges(startTime,stopTime));
        }
    });

    lap.click(()=>{
        lap.css("transform","rotate(5deg)");
        if(isStarted){
            lap.css("transform","rotate(0deg)");
            if(lastlaptime == null)
                lastlaptime = startTime;
            let date = new Date();
            laptime = date.getTime();

            const diff = setChanges(lastlaptime,laptime);
            elem.text(diff);
            lastlaptime = laptime;
        }
    });

    
});
var setChanges = (t0,t1)=>{
    let time = t1-t0;
    let ms = time%1000;
    time = Math.floor(time/1000);
    let h,m,s;

    h = Math.floor(time/3600);
    if(h<10)
        h = "0" + h;
    time %= 3600;

    m = Math.floor(time/60);
    if(m<10)
        m = "0" + m;
    time %= 60;

    s = time;
    if(s < 10)
        s = "0" + s;

    text = h + ":" + m + ":" + s + "." + ms;

    return text;

};