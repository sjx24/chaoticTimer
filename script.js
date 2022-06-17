const hourDiv = document.getElementById("hour");
const todayDiv = document.getElementById("today");

function getTime() {
    let now = new Date();
    let hour = number(now.getHours()); //0~23시
    let minute = number(now.getMinutes()); //0~59분
    let second = number(now.getSeconds()); //0~59초
    let millisecond = number(now.getMilliseconds()); //밀리세컨즈
    let noon = "";
    let dayNumber = now.getDay();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    const dayList = ["日", "月","火","水","木","金","土"];
    
    //clockDiv.textContent = second;
    if (now.getHours() == 0){
        hour = 12;
    }
    if (hour > 11){
        if (hour > 12){hour = number(hour - 12);}
        noon = "PM";
    }
    else {noon = "AM";}    
    
    todayDiv.textContent = year + "-" + month + "-" + day + "(" + dayList[dayNumber] + ")";
    hourDiv.textContent = noon + " " + hour + ":" + minute + ":" + second + "." + millisecond;
}

setInterval(getTime, 1);

function number(num) {
    if(num < 10) {return "0" + num;}
    return num;
}