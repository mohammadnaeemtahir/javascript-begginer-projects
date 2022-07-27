(function () {
  "use strict";
  
  let distance;
  const answer = document.getElementById("answer");
  let conversion;

  document.getElementById("convert").addEventListener("submit", (e) => {
    e.preventDefault();
    distance = parseFloat(document.getElementById("distance").value);
    if (distance) {
      conversion = (distance * 1.60934).toFixed(2);
      answer.innerHTML = `<h2>${distance} mile(s) converts to ${conversion} killometers</h2>`;
    } else {
      answer.innerHTML = `<h2>Please enter a valid number.</h2>`;
    }
  });
})();
