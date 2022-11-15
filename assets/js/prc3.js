//リストとリストの間を線で結ぶ
//document.querySelectorAll('.box').forEach(element=>{
//    element.onclick = () => {alert("hello world!")};
//});

console.log(document.querySelectorAll('.plate div'));
document.querySelectorAll('.plate div').forEach(element=>{
    element.onmousedown = function(event){
        console.log(event.clientX,event.clientY);
    }
    element.ondragstart = function(event){
        console.log("ドラッグが始まりました。");
        console.log(event.clientX,event.clientY);
    }
});