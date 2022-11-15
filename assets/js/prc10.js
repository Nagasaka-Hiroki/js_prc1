window.onload = function() {
    let SampleDragB = document.getElementById("sample_drag_b");
    let SampleDropB = document.getElementById("sample_drop_b");
    SampleDragB.ondragstart =  function(event) {
        event.dataTransfer.setData("Text",2);
    };
    SampleDropB.ondragenter = function(event){
        event.preventDefault();
    };
    SampleDropB.ondragover = function(event) {
        event.preventDefault();
    };
    SampleDropB.ondrop = function(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("Text");
        this.innerHTML = this.innerHTML * data;
        sample_b_count();
    };
}

let count = 0;
sample_b_count = function() {
    document.getElementById("sample_output_b").innerHTML = ++count;
    console.log(count);
}