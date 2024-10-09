const inputEmail = document.getElementById("email");

function copyEmail() {
  const email = "gabrielpekim@hotmail.com";

  const inputTmp = document.createElement("input");

  inputTmp.value = email;

  document.body.appendChild(inputTmp);

  inputTmp.select();

  try {
    document.execCommand("copy");

    inputEmail.value = "Copiado!";
    inputEmail.classList.add("copy-btn-submitted");

    setTimeout(() => {
      inputEmail.value = "Copiar";
      inputEmail.classList.remove("copy-btn-submitted");
    }, 4000);
  } catch (err) {
    console.error(err);
  }

  document.body.removeChild(inputTmp);
}
