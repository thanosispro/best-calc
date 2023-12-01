var btnvalue,result1,actualvalue,delet,save;
function printvalue(btn){
   
    if(document.getElementById("result").innerHTML.trim() !== ""){
        document.getElementById("input").innerHTML=null;
        btnvalue=btn.innerText;
        console.log(btnvalue);
       document.getElementById("input").textContent+=btnvalue;
        document.getElementById("result").innerHTML=null;
}
else{
    console.log("helo");
    
    btnvalue=btn.innerText;
    console.log(btnvalue);
   document.getElementById("input").textContent+=btnvalue;}
}



function result(){
result1=document.getElementById("input").innerHTML;
result1=eval(result1);
document.getElementById("result").innerHTML=result1;
save=result1;
}
function deletevalue(){
actualvalue=document.getElementById('input').innerHTML;
delet = actualvalue.slice(0, -1);
document.getElementById('input').innerHTML=delet;
}
function square(){
document.getElementById("input").textContent+="**2"
}
function root(){
    document.getElementById("input").textContent+="**0.5"
}
function ans(){
    console.log(save);
    if(document.getElementById("result").innerHTML.trim() !== ""){
        document.getElementById("result").innerHTML=null;
        document.getElementById("input").innerHTML=null;
        document.getElementById("input").textContent+=save;
    }
    else{
        document.getElementById("input").textContent+=save;
    }
}
function clearvalue(){
    document.getElementById("input").innerHTML=null;
    document.getElementById("result").innerHTML=null;
}
function weather(){
    if(document.getElementById("weather").innerHTML=="Day"){
        console.log("hello");
        document.getElementById("weather").innerHTML="Night";
    document.body.style.backgroundImage="url('night.jpg')";
    document.getElementById("image").innerHTML='<img src="nighty.png" alt="" width="60pt" style="cursor: pointer;" onclick="weather()">'
}
else{
    document.body.style.backgroundImage="url('dayy.jpg')";
    document.getElementById("weather").innerHTML="Day"
    document.getElementById("image").innerHTML='<img src="day.png" alt="" width="60pt" style="cursor: pointer;" onclick="weather()">'
}

}