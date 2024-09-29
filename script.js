function append(value) {
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function deleteChar() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.substring(
    0,
    current.length - 1
  );
}

function calculate() {
  let current = document.getElementById("result").value;
  if (current) {
    document.getElementById("result").value = eval(current);
  }
}

// JavaScript to handle theme toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});
