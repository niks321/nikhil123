function time(t) {
    if(t<=11)
    console.log("Good Morning");
    else if(t>=13 && t<=15)
    console.log("Good Afternoon");
    else if(t>=16 && t<=18)
    console.log("Good Evening");
    else
    console.log("Good Night");
};
let t=17
time(t);