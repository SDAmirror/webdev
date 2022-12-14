

    function showgibs() {
        var h = document.getElementById("enthalpy").value;
        var t = document.getElementById('temperature').value;
        var s = document.getElementById('entropy').value;
        var g;
        if (h>0){
            if (s>0){
                if (t>0){
                    g="negative";
                }else {
                    g="positive";
                }
            }else{
                g="positive";
            }
        }else {
            if (s>0){
                g="negative";
            }else{
                if (t>0){
                    g="positive";
                }else {
                    g="negative";
                }
            }
        }

        document.getElementById('gibs').innerHTML = "gibb's free enenrgy is "+ g;
        if (g=="positive"){
            document.getElementById('reaction').innerHTML = ' reaction is none spontaneouse';
        }else {
            document.getElementById('reaction').innerHTML = ' reaction is spontaneuos';
        }
    }

    //task1
    function triangle() {
        var h = parseInt(document.getElementById('enth').value);
        var s = parseInt(document.getElementById('entr').value);
        var t = parseInt(document.getElementById('temp').value);
        var res=h-t*s;

        document.getElementById('demo').innerHTML=res;

    }


    var onInputFunc = (function(e) {
        if (e.keyCode == 13) {
            var h = parseInt(document.getElementById('enth').value);
            var s = parseInt(document.getElementById('entr').value);
            var t = parseInt(document.getElementById('temp').value);
            var res=h-t*s

            document.getElementById('demo').innerHTML=res;
        }
    });

    $('input').on("keydown", onInputFunc);


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

    function Number(id) {
        var v = document.getElementById('vol').value;
        var mass= document.getElementById('mass').value;
        var Mr= document.getElementById('Mr').value;
        var num = (mass/Mr*Math.pow(10,23)).toFixed(4);
        id.innerHTML= num;
    }

    function Concentration(id) {
        var v = document.getElementById('vol').value;
        var mass= document.getElementById('mass').value;
        var Mr= document.getElementById('Mr').value;
        var num = (mass/Mr/v).toFixed(4);
        id.innerHTML = num;
    }

    function orgtest() {
        var a = document.getElementsByName("group");
        var alco = document.getElementsByName("alcostruct");
        var carbo = document.getElementsByName("carboxylic")
        for (var i=0 ;i<a.length;i++){
            if (a[i].checked!= true&&a[i].value!="1"){
                for (var j=0;j<alco.length;j++){
                    alco[j].checked= false;
                }
            }
        }
        for (var k=0 ;k<a.length;k++){
            if (a[k].checked!= true&&a[k].value!="3"){
                for (var g=0;g<carbo.length;g++){

                    carbo[g].checked= false;

                }
            }
        }
        for (var t = 0; t<a.length;t++){
            if (a[t].checked==true&&a[t].value=="1"){
                for (var f=0;f<alco.length;f++){
                    if (alco[f].checked==true&&alco[f].value=="1"){
                        document.getElementById("p1").innerHTML = 'Schiffs Reagent';
                    }
                }
            }
        }


    }
