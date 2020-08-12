//jshint  esversion: 6
$(document).ready(()=>{
    var isStarted = 0;
    var startTime;
    var stopTime;
    var lastlaptime;
    var laptime;
    let laps = 0;
    var elem = $("#timer");
    var start = $("#start");
    var lap = $("#lap");
    var clear = $("#clear");

    start.focus();
    start.click(()=>{
        if(!isStarted){
            start.css("background","#ff5c5c");
            isStarted = 1;
            start.text("STOP");
            let date = new Date();
            startTime = date.getTime();
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
        if(isStarted){
            laps += 1;
            lap.css("transform","rotate(0deg)");
            if(lastlaptime == null)
                lastlaptime = startTime;
            let date = new Date();
            laptime = date.getTime();

            const diff = setChanges(lastlaptime,laptime);
            lastlaptime = laptime;

            let newElement = document.createElement("div");
            newElement.className  = "89ysiodfgert";
            newElement.style.cssText = "width:98vw;display:flex;justify-content:center;align-items:center";
            let inputElement = document.createElement("p");
            inputElement.innerText = laps +". " + diff;
            inputElement.style.cssText = "margin:15px;font-family:Raleway;text-align:center;background:#e0dede;padding:20px;font-size:50px;width:400px;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)";
            newElement.append(inputElement);
            document.body.append(newElement);
        }
    });

    clear.click(()=>{
        if(!isStarted){
            if(laps > 0){
                $(".89ysiodfgert").remove();
            }
            elem.text("00:00:00.000");
            laps = 0;
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