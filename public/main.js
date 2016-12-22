var pictionary = function() { //deklarojme variablin pictionarin i cili eshte si funksion dhe brenda ketij funkioni do te 
    var canvas, context;     //do te deklaropjme variablat qe do te na nevojiten 
    var drawing = false;  //ketu deklaroj nje variabel drawing dhe e kam false qe do te me sherbeje per levizjen dhe komanfdimin e mousit

    var draw = function(position) { //kam variabllen ose nje funksion te pictionarit i cili te na bej te mundur pozicionimin e mousit 
        context.beginPath();//ketu eshte nje funksion i pictionarin qe ben te mundur nisjen e conteksit dmth vizatimi
        context.arc(position.x, position.y,// perseri nje funksion i pictionarit ne te cilin deklaroj 2 pozicione x dhe y dhe duke deklaruar variablt
                         6, 0, 2 * Math.PI);//Math pi eshte nje librari qe gjeneron numra 3.14
        context.fill();//ketu theras funksionin 
    };

    canvas = $('canvas');// kemi elementin canavas dhe nepermjet selektorit i deklaroj elementin canvas 
    context = canvas[0].getContext('2d');// ketu kam variablin conteks i cili eshte nje funkion 
    canvas[0].width = canvas[0].offsetWidth;// ketu kam gjeresine e elementit canvas 
    canvas[0].height = canvas[0].offsetHeight;// dhe gjatesine  e canavasit 

    canvas.on("mousedown", function() {// tani elementi canvas nqs un mousin dmth klikoj "mousedown " nqs ky kusht plotesohet ath mund te pikturoj 
        drawing = true;
    });

    canvas.on("mouseup", function(){// nws e un e ngre mousin ath nuk mun te pikturoj 
        drawing = false;// false 
    })

    canvas.on('mousemove', function(event) {// nqs un e leviz mousin dhe nqs drawing eshte true atehere un mund te vizatoj lirshem 
        if (drawing === true) {//nqs ky kushti plotesohet 
            var offset = canvas.offset();
        var position = {x: event.pageX - offset.left,//pozicioni ne te djathte 
                        y: event.pageY - offset.top};//pozicionimi lart sips x dhe y qe jane dy parametra 
        draw(position);// ketu theras draw si funksion me parameteer pozicion 
        }
    });

   var guessBox;// deklaroj guess box si nje variabel

var onKeyDown = function(event) {// nqs un fut nje input psh tekst dhe nqds un klikoj enter
    if (event.keyCode != 13) { // Enter
        return;
    }

   $('#draw').append(guessBox.val() +"<br>");// atehere tek divi qe kam tek frontend e shton dhe afishon tektin qe kam futur
    guessBox.val('');// therras funkion guessbox.val qe si parameteer ka nje string bosh 
};

    guessBox = $('#guess input');// kemi nje selektor qe do te marre id guessbox nga front endi
    guessBox.on('keydown', onKeyDown);
    };

$(document).ready(function() {// jquery 
// ketu theras funksionin pictionarin 
    pictionary();
});
