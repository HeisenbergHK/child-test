console.log("child.js loaded");


// Listen for messages from parent
window.addEventListener("message", function (event) {
if (event.origin !== "https://parent-site.w3spaces.com") return;
console.log("Message from parent:", event.data);
document.getElementById("statusMsg").textContent = "Received: " + event.data;
});


// Send message to parent
function sendToParent() {
window.parent.postMessage("Hello from child!", "https://parent-site.w3spaces.com/");
console.log("Message sent to parent!");
}


document.getElementById("btn").addEventListener("click", sendCookie);

// After generating / reading the cookie
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiYWRtaW4iLCJkaXNwbGF5X25hbWUiOm51bGwsIm1ldGFkYXRhIjp7InJvbGUiOiJhZG1pbiIsInByb3ZpZGVyIjoiY3JlZGVudGlhbHMifSwiZXhwIjoxNzY1NDQzNDUyLCJpYXQiOjE3NjQxNDc0NTJ9.oY_omK06FB8oOvl645IR5Qal_o68d4oNR96V-9KN4Hk";

function sendCookie(token) {

  window.parent.postMessage(
    { type: "access_token", token },
    "https://parent-site.w3spaces.com"
  );

  console.log("Cookie sent to parent!");
}



// Set cookie for 7 days
// function setAccessToken(token) {
// const expires = new Date(Date.now() + 7 * 86400000).toUTCString();
// document.cookie = `access_token_child=${token}; expires=${expires}; path=/; Secure; SameSite=Strict`;
// }


// setAccessToken("child");
