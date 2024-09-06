var character=document.getElementById("character")
var right=0 
function animation(){
    console.log(event.keyCode)
    if(event.keyCode===39){
        character.src= "forward.gif"
         right= right+ 10 
         character.style.left =right+"px"
         setTimeout(function(){
         character.src="stand.gif"
          character.style.height="200px"
            character.style.width="150px"
         })       
        
     }



     if(event.keyCode===37){
        character.src="kick.gif"
         right= right-10 
         character.style.left =right+"px"
         setTimeout(function(){
          character.src="kick.gif"
            character.style.height="200px"
            character.style.width="150px"
            })       
        
     }
   
    
    }



window.onkeydown = animation



       























