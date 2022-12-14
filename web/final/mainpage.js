

function take(id) {

    if (id.style.display == 'block') {

        id.style.display = 'none';

} else {
    id.style.display = 'block';


}


}

function bgcolord(id) {
    id.src = "white.png";
    document.getElementById('mySidenav').style.background = "none"
    document.getElementById("headerf").style.background = "none"
    var a = document.getElementsByName('bgPara');
    for ( var i =0; i<a.length;i++){
        a[i].style.background = "black";
        a[i].style.color = "white";
    }

}

function bgcolorw(id) {
    id.src = "image-20160510-20731-1pf8nwv.jpg";
    document.getElementById('mySidenav').style.backgroundColor = "black"
    document.getElementById("headerf").style.backgroundColor= "black"

    var a = document.getElementsByName('bgPara');
    for ( var i =0; i<a.length;i++){
        a[i].style.background = "white";
        a[i].style.color = "black ";
    }
}
function openNav(id) {

    document.getElementById("mySidenav").style.display = "block";
    document.getElementById('op1').style.width= "0%";

    var a = document.getElementsByName('contentW');
    for ( var i= 0; i<a.length;i++){
        a[i].style.width = "76%";
    }
}



function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById('op1').style.width = "2%";

    var a = document.getElementsByName('contentW');
    for ( var i= 0; i<a.length;i++){
        a[i].style.width = "96%";
    }
}




