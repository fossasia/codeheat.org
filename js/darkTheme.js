var toggleDarkMode = () => {
  var theme = document.getElementById("theme");
  var button = document.getElementById("theme-toggle");
  if (theme.getAttribute("href") == "css/custom.css") {
    theme.setAttribute("href", "css/custom-darkTheme.css");
    button.innerHTML = "Day Mode";
  } else {
    theme.setAttribute("href", "css/custom.css");
    button.innerHTML = "Night Mode";
  }
};
