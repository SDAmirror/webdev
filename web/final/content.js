
function changeBC(bimg) {

    var argui=document.getElementsByName("homobutt");



    if (bimg.src=='image-20160510-20731-1pf8nwv.jpg'){
        alert("black")
        for (var i= 0 ;i< a.length;i++){
            argui[i].style.backgroundColor="black";
            argui[i].style.color="white";
        }
    }
       if (bimg.src=='white.png'){
           alert("black")
        for (var t= 0 ;t< a.length;t++){
            argui[t].style.backgroundColor="white";
            argui[t].style.color="black";
        }
    }

}
var f=0;
var h;
var hydro = document.getElementsByName("hydro")
function  homoadd() {
    f=f+1;
    h=f*2+2;
    document.getElementById('write').innerHTML = "formula is :"+"C"+f+"H"+(h) ;
}

function  homosub() {
    if (f==0){
        return;
    }
    f=f-1;
    h = f * 2 + 2;

    if (f==0){
        document.getElementById('write').innerHTML = "";
        return;
    }
    document.getElementById('write').innerHTML = "formula is :"+"C"+f+"H"+(h) ;
}
function  homores() {
    f=0;
    document.getElementById('write').innerHTML = "";
}