function addColor() {
  const color_name = document.querySelector('input').value;
  const btn = document.createElement("button");
  btn.innerHTML = color_name;
  btn.style = "background-color: " + color_name;
  btn.setAttribute('id', color_name);
  btn.setAttribute("onclick", "changeBg(this)");
  const holder = document.querySelector(".grey-holder");
  holder.appendChild(btn);
}

function changeBg(buttonElement) {
  const button_name = buttonElement.id;
  const body = document.querySelector('body');
  body.style = "background-color: " + button_name;
}