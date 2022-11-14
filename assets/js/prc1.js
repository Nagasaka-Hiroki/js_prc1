// まず単一のオブジェクトを動かす。赤い板を動かす
item1.onmousedown = function(event){
    //
    let shiftX = event.clientX - item1.getBoundingClientRect().left;
    let shiftY = event.clientY - item1.getBoundingClientRect().top;
    console.log(shiftX,shiftY);

    //
    item1.style.position = 'absolute';
    item1.style.zIndex = 1000;

    document.body.append(item1)

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY){
        item1.style.left = pageX - shiftX + 'px';
        item1.style.top  = pageY - shiftY + 'px';
    };
    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
    };

    document.addEventListener('mousemove',onMouseMove);
    item1.onmouseup = function() {
        document.removeEventListener('mousemove',onMouseMove);
        item1.onmouseup = null;
    };
};

item1.ondragstart = function() {
    return false;
};

//クラスが同一のオブジェクトを取り出してみる
const lists = document.querySelectorAll('.drag-list li');
console.log(lists);

//クラスが同一のオブジェクトをすべて選択して同一の処理を施す。
document.querySelectorAll('.drag-list li').forEach(element =>{
    console.log(element);
    element.ondragstart = function(event) {
        event.dataTransfer.setData('text/plain',event.target.id);
    };
    element.ondragover = function(event) {
        event.preventDefault();
        this.style.borderTop = '2px solid blue';
    };
    element.ondragleave = function(event) {
        this.style.borderTop = '';
    };
    element.ondrop = function(event) {
        event.preventDefault();
        let id = event.dataTransfer.getData('text/plain');
        let element_drag = document.getElementById(id);
        this.parentNode.insertBefore(element_drag, this);
        this.style.borderTop = '';
    };
});
//動作が若干変。とりあえずかんたんなやつはOK。