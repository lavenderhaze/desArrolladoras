const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  checkInputs()
})

username.addEventListener("input", () => {
  checkUsername()
})
email.addEventListener("input", () => {
  checkEmail()
})
password.addEventListener("input", () => {
  checkPassword()
})
password2.addEventListener("input", () => {
  checkPassword2()
})

function checkUsername() {
  const usernameValue = username.value.trim()

  if (usernameValue === "") {
    return setErrorFor(username, "Rellene este campo")
  } else {
    return setSuccessFor(username)
  }
}

function checkEmail() {
  const emailValue = email.value.trim()

  if (emailValue === "") {
    return setErrorFor(email, "Rellene este campo")
  } else if (!isEmail(emailValue)) {
    return setErrorFor(email, "Email inválido")
  } else {
    return setSuccessFor(email)
  }
}

function checkPassword() {
  const passwordValue = password.value.trim()

  if (passwordValue === "") {
    return setErrorFor(password, "Rellene este campo")
  } else if (passwordValue.length < 8) {
    return setErrorFor(password, "Debe tener al menos 8 caracteres")
  } else {
    return setSuccessFor(password)
  }
}

function checkPassword2() {
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()

  if (password2Value === "") {
    return setErrorFor(password2, "Rellene este campo")
  } else if (passwordValue !== password2Value) {
    return setErrorFor(password2, "Las contraseñas no coinciden")
  } else {
    return setSuccessFor(password2)
  }
}

function checkInputs() {
  const goodUsername = checkUsername()
  const goodEmail = checkEmail()
  const goodPassword = checkPassword()
  const goodPassword2 = checkPassword2()

  if (goodUsername && goodEmail && goodPassword && goodPassword2) {
    window.alert("¡Enhorabuena! Se ha registrado correctamente.")
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector("small")
  formControl.className = "form-control error"
  small.innerText = message

  return false
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = "form-control success"

  return true
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
