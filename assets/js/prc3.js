//リストとリストの間を線で結ぶ
//document.querySelectorAll('.box').forEach(element=>{
//    element.onclick = () => {alert("hello world!")};
//});

console.log(document.querySelectorAll('.plate div'));
document.querySelectorAll('.plate div').forEach(element=>{
    element.ondragstart = () => {console.log("ドラッグが始まりました。")};
});