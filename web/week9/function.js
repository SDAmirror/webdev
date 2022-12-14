
//task1
function triangle() {
    var a = parseInt(document.getElementById('base').value);
    var b = parseInt(document.getElementById('height').value);
    var res=a*b/2;

    document.getElementById('demo').innerHTML=res;

}
//task2
let i = 0;
var a = document.getElementById('d');
function move(num) {
    if (i == 0) {
        i = 0;
        var elem = document.getElementById("bar");
        var width = 0;
        var id = setInterval(frame, 22);
        function frame() {
            if (width >= num) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}


//task3


function n1(n1,input1) {
document.getElementById(input1).value +=input1.value;
}

