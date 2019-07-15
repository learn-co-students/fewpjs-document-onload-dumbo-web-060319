document.addEventListener("DOMContentLoaded", function() {
  let el = document.getElementById('text');
  el.textContent = "This is really cool!";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
