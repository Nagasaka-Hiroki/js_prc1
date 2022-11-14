//動作を改善したやつらしい
document.querySelectorAll('.drag-list li').forEach(element =>{
    element.ondragstart = function(event) {
        event.dataTransfer.setData('text/plain',event.target.id);
    };
    element.ondragover = function(event) {
        event.preventDefault();
        let rect = this.getBoundingClientRect();
        if ((event.clientY - rect.top) < (this.clientHeight/2)) {
            this.style.borderTop = '2px solid blue';
            this.style.borderBottom = '';
        } else {
            this.style.borderTop = '';
            this.style.borderBottom = '2px solid black';
        }
    };
    element.ondragleave = function() {
        this.style.borderTop = '';
        this.style.borderBottom = '';
    };
    element.ondrop = function(event) {
        event.preventDefault();
        let id = event.dataTransfer.getData('text/plain');
        let element_drag = document.getElementById(id);

        let rect = this.getBoundingClientRect();
        if((event.clientY - rect.top) < (this.clientHeight/2)) {
            this.parentNode.insertBefore(element_drag, this);
        } else {
            this.parentNode.insertBefore(element_drag, this.nextSibling);
        }
        this.style.borderTop = '';
        this.style.borderBottom = '';
    };
});