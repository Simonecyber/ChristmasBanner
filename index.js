let section = document.querySelector('section');
let title = document.querySelector('h2');

let a = 1;

section.addEventListener('click', () =>{
    
  if (a == 1)
  {
  superStar();
  return a = 0;
  }else{
      bolle();
      return a = 1;
  }
  });
  



function bolle(){

title.innerText = 'Merry \n Christmas \n & ';
section.style.background = '#f1f1f1';
    
    const count = 250;
   
    var i = 0;

    while(i<count){
        let bolla = document.createElement('i');
        var x = Math.floor(Math.random()*window.innerWidth);
        var y = Math.floor(Math.random()*window.innerHeight);

        let size = Math.random()*10;
        bolla.style.left = x+'px';
        bolla.style.top = y+'px';
        bolla.style.width = 1+size+'px';
        bolla.style.height = 1+size+'px';

        bolla.style.animationDuration = 5+size+'s';
        bolla.style.animationDelay = -7+size+'s';

        section.appendChild(bolla);

        i++
    
    }
    

}

bolle()

function superStar(){

title.innerText = 'Happy \n New Year';
section.style.background = '#ff2a2a';

let star = 300;

var addPulse = function( element ){
  var pulseTime = Math.random() * 4000;
  setTimeout( function(  ){
    element.className += ' pulse';
  }, pulseTime );
  
}

for( var starlight = 0; starlight < star; starlight++ ) {
    var aStar = document.createElement('i');
		aStar.className='star';
  
  	var a = Math.floor(Math.random()*window.innerWidth);
    var b = Math.floor(Math.random()*window.innerHeight);
  
    let size = Math.random()*3;

    aStar.style.left = a+'px';
    aStar.style.top = b+'px';
  
  	document.body.appendChild( aStar );
  
    addPulse( aStar );

    }

};










