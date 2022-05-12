const form = document.querySelector("#form");
const inputName = document.querySelector("#username");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#password");
const confirmationSenha = document.querySelector("#password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  let validateName = inputName.value;
  let validateEmail = inputEmail.value;
  let validateSenha = inputSenha.value;
  let confirmationSenhaValue = confirmationSenha.value;

  if (validateName === "") {
    setErrorFor(inputName, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(inputName);
  }

  if (validateEmail === "") {
    setErrorFor(inputEmail, "O email é obrigatório.");
  } else if (!checkEmail(validateEmail)) {
    setErrorFor(inputEmail, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(inputEmail);
  }

  if (validateSenha === "") {
    setErrorFor(inputSenha, "A senha é obrigatório.");
  } else if (validateSenha.length < 7) {
    setErrorFor(inputSenha, "A senha precisa ter no minimo 7 caracteres.");
  } else {
    setSuccessFor(inputSenha);
  }

  if (confirmationSenhaValue === "") {
    setErrorFor(confirmationSenha, "A confirmação de senha é obrigatória.");
  } else if (confirmationSenhaValue !== validateSenha) {
    setErrorFor(confirmationSenha, "As senhas não conferem.");
  } else {
    setSuccessFor(confirmationSenha);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O Formulário está Válido!") ;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(inputEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    inputEmail
  );
}
