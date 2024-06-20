const theme = document.querySelector(".theme-switch");
const is_dark_mode = window.localStorage.getItem("data-theme") == true;
current_mode = "light";

if (is_dark_mode) {
  document.querySelector("body").setAttribute("data-theme", 'dark');
}

theme.addEventListener("click", () => {
  if(document.body.getAttribute("data-theme")=== 'light'){
    current_mode = "dark";
  }else{
    current_mode = "light";
  }
  document.body.setAttribute("data-theme", current_mode);
  document.body.children[0].setAttribute("data-theme", current_mode);
  window.localStorage.setItem("data-theme", is_dark_mode);
});