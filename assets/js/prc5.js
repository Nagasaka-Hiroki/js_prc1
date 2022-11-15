window.onload = function() {
    document.getElementById("sample_drag_b").ondragstart =  function(num) {
        num.dataTransfer.setData("Text",num.target.id);
    };
    document.getElementById("sample_drag_b").ondrag = function(){
        sample_b_count();
    };
}

let count = 0;
sample_b_count = function() {
    document.getElementById("sample_output_b").innerHTML = ++count;
    console.log(count);
}