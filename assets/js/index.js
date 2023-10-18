const inputs = document.querySelectorAll("input[type=password");
inputs.forEach(input => input.addEventListener("change", checkMatchPasswords));

function checkMatchPasswords() {
  const [pass1, pass2] = Array.from(inputs);
  const errorMsg = document.querySelector("span.error-msg");

  if (pass1.value === pass2.value) {
    pass1.classList.remove("error");
    pass2.classList.remove("error");
    errorMsg.style.display = "none";
  } else {
    pass1.classList.add("error");
    pass2.classList.add("error");
    errorMsg.style.display = "block";
  }
}
