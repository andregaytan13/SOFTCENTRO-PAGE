document.getElementById("carrusel2").style.display = "none";
document.getElementById("carrusel3").style.display = "none";
document.getElementById("carrusel4").style.display = "none";
document.getElementById("carrusel5").style.display = "none";


function carrProd() {
    var x = document.getElementById("carrusel1");
    var y = document.getElementById("carrusel2");
    var z = document.getElementById("carrusel3");
    var w = document.getElementById("carrusel4");
    var v = document.getElementById("carrusel5");
    if (y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "none";
        v.style.display = "none";
    } else if (z.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";    
        w.style.display = "none";
        v.style.display = "none";    
    } else if (w.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";  
        w.style.display = "none";
        v.style.display = "none"; 
    } else if (v.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";  
        w.style.display = "none";
        v.style.display = "none"; 
     }  else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "none";
        v.style.display = "none";
    }
}


function carrMrtienda() {
    var x = document.getElementById("carrusel1");
    var y = document.getElementById("carrusel2");
    var z = document.getElementById("carrusel3");
    var w = document.getElementById("carrusel4");
    var v = document.getElementById("carrusel5");
    if (x.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        w.style.display = "none"; 
        v.style.display = "none";
    } else if (z.style.display === "none"){
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";   
        w.style.display = "none";
        v.style.display = "none";      
    } else if (w.style.display === "none"){
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";  
        w.style.display = "none";
        v.style.display = "none"; 
    }  else if (v.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";  
        w.style.display = "none";
        v.style.display = "none"; 
     } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        w.style.display = "none";
        v.style.display = "none"; 
    }
}

function carrMrchef(){
    var x = document.getElementById("carrusel1");
    var y = document.getElementById("carrusel2");
    var z = document.getElementById("carrusel3");
    var w = document.getElementById("carrusel4");
    var v = document.getElementById("carrusel5");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        w.style.display = "none";
        v.style.display = "none";  
    } else if (z.style.display === "none"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block"; 
        w.style.display = "none";
        v.style.display = "none";         
    }  else if (w.style.display === "none"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";  
        w.style.display = "none"; 
        v.style.display = "none"; 
    } else if (v.style.display === "none"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";  
        w.style.display = "none";
        v.style.display = "none"; 
    }  else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        w.style.display = "none"; 
        v.style.display = "none"; 
    }
}

function carrCams(){
    var x = document.getElementById("carrusel1");
    var y = document.getElementById("carrusel2");
    var z = document.getElementById("carrusel3");
    var w = document.getElementById("carrusel4");
    var v = document.getElementById("carrusel5");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "block";
        v.style.display = "none";  
    } else if (z.style.display === "none"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none"; 
        w.style.display = "block";
        v.style.display = "none";         
    } else if (x.style.display === "none"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";  
        w.style.display = "block";
        v.style.display = "none";  
    } else if (v.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";  
        w.style.display = "none";
        v.style.display = "none"; 
    }  else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "block";
        v.style.display = "none";  
    }
}

    function carrMant(){
        var x = document.getElementById("carrusel1");
        var y = document.getElementById("carrusel2");
        var z = document.getElementById("carrusel3");
        var w = document.getElementById("carrusel4");
        var v = document.getElementById("carrusel5");
        if (y.style.display === "none") {
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            w.style.display = "none";
            v.style.display = "block";  
        } else if (z.style.display === "none"){
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none"; 
            w.style.display = "none";
            v.style.display = "block";         
        } else if (x.style.display === "none"){
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";  
            w.style.display = "none";
            v.style.display = "block";  
        } else if (w.style.display === "none"){
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";  
            w.style.display = "none";
            v.style.display = "block"; 
        }  else {
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            w.style.display = "none";
            v.style.display = "block";  
        }

}


/* function ajustarPie() {
    var winH = $(window).height();
    var docH = $("body").height();
    var pieH = $("footer").height();
    
    if (docH + pieH < winH) {
      $("footer").attr("class", "bottom");
      } else {
        $("footer").attr("class", "");
        }
    }
  
  $(document).ready(ajustarPie);
  $(window).on("resize", ajustarPie); */