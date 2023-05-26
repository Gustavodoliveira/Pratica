var numDrum = document.querySelectorAll(".drum").length ;

for (var i = 0 ; i<numDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        alert('helo')

     var buttonInnerHtml = numDrum.innerHtml ;
     
     switch (buttonInnerHtml) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3') ;
            tom1.play();
            
            break;
     
        default:
            break;
     }

    })
   
}     