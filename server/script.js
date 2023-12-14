document.addEventListener("DOMContentLoaded", function() {
    // Create a button
    var button = document.createElement("button");
    button.textContent = "Show Popup";
    button.addEventListener("click", showHelloPopup);
  
    // Append the button to the body
    document.body.appendChild(button);
  
    // Function to show the popup
    function showHelloPopup() {
      // Create a popup div
      var popup = document.createElement("div");
      popup.textContent = val;
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.backgroundColor = "#fff";
      popup.style.padding = "20px";
      popup.style.border = "1px solid #ccc";
      popup.style.zIndex = "9999";
  
      // Append the popup to the body
      document.body.appendChild(popup);
  
      // Remove the popup after a delay (for demonstration purposes)
      setTimeout(function() {
        document.body.removeChild(popup);
      }, 2000);
    }
  });

var val = "Hello Word";