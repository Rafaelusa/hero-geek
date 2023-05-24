var themeToggle = document.getElementById("themeToggle");
var body = document.body;

body.classList.add("superman"); // Define o tema Superman como padrão
body.classList.add("dark-mode"); // Define o modo escuro como padrão

themeToggle.addEventListener("change", function() {
  if (themeToggle.checked) {
    body.classList.remove("superman");
    body.classList.add("batman");
  } else {
    body.classList.remove("batman");
    body.classList.add("superman");
  }
});

