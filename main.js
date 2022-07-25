// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//establishing constants
const hearts = document.querySelectorAll(".like");
hearts.forEach(heart => {
  //console.log(heart);
  heart.addEventListener("click",(e) => colorHeart(e));
});


//adding event listeners
//hearts.addEventListener("click", (e) => colorHeart(e));


//activate heart function
function colorHeart(e){
   e.preventDefault();
   mimicServerCall().then((data)=>{
    console.log(data);
    if(data == "Pretend remote server notified of action!"){
      if(e.target.innerHTML == EMPTY_HEART){
        e.target.innerHTML = FULL_HEART;
        e.target.className = ("activated-heart");    
    }
      else if(e.target.innerHTML == FULL_HEART){
        e.target.innerHTML = EMPTY_HEART;
        e.target.className = ("like");

      }
    }

   }).catch((error)=>{
      alert("error");
      console.log(error.message);
      document.getElementById("modal").hidden = false;
      setTimeout( () => document.getElementById("modal").hidden = true , 3000);

   });

  }
  





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
