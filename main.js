// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeHeart = document.getElementsByClassName("like-glyph");

function likeAction(e) {
  const heart = e.target;
  mimicServerCall("http://mimicServer.example.com")
    .then(function () {
      heart.innerText === EMPTY_HEART
        ? ((heart.innerText = FULL_HEART),
          (heart.className = "activated-heart"))
        : ((heart.innerText = EMPTY_HEART), (heart.className = "like-glyph"));
    })
    .catch(function (error) {
      const errorMsg = document.getElementById("modal");
      errorMsg.className = " ";
      errorMsg.innerText = "Error!";
      setTimeout(() => (errorMsg.className = "hidden"), 3000);
    });
}

for (const symbol of likeHeart) {
  symbol.addEventListener("click", likeAction);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
