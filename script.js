// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Delete the last character in the display
  function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
  }
  
  // Append a character to the display
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  // Calculate the result
  function calculateResult() {
    try {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  