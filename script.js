const input = document.querySelector(".input");
const errorMessage = document.querySelector(".error-message");
const emptyMessage = document.querySelector(".empty-message");
const submitButton = document.querySelector(".submit");
const form = document.getElementById("email-form");

// style the input when focus triggers
input.addEventListener("focusin", () => {
    input.className = "valid";
});

// validate live user typing...
input.addEventListener("input", () => {
  const value = input.value.trim(); // fresh value
  if (valid(value)) {
    input.className = "valid";
    errorMessage.textContent = "";
  } else {
    input.className = "invalid";
  }
});

// undo focus style
input.addEventListener("blur", () => {
  input.className = "";
});

function valid(value) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(value);
  return pattern;
}

function match() {
  const value = input.value.trim(); // fresh value
  if (valid(value)) {
    input.className = "";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Valid email required";
    input.className ="invalid";
  }

  if (value === "") {
    emptyMessage.textContent = "Please fill the form!";
    
  }
}

// submit form
form.addEventListener("submit", (e) => {
  const value = input.value.trim();
  e.preventDefault();
  match();
  if (valid(value)) {
    successMessage();
  }
});

function successMessage() {
  const main = document.querySelector('main');
  const picture = main.querySelector('picture');
  const stayUpdated = main.querySelector('.stay-updated');

  picture.classList.add('hide');
  stayUpdated.classList.add('hide');
  stayUpdated.classList.remove('stay-updated');
  
  const article = document.createElement('article');
  article.classList.add('success-message');

  article.innerHTML = `  <img src="assets/images/icon-success.svg" alt="icon-success" />
    <h1>Thanks for subscribing!</h1>
    <p>
      A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it
      and click the button inside to confirm your subscription.
    </p>
    <button type="submit" class="submit">
            Dismiss message
          </button>`;

    main.append(article);

    const bTag = article.querySelector('b');
    bTag.innerText = input.value;
    const dismissButton = article.querySelector('button');

    dismissButton.addEventListener('click', () => {
      article.className = "hide";
      picture.classList.remove('hide');
      stayUpdated.classList.remove('hide')
      stayUpdated.classList.add('stay-updated')
      input.value = "";
    });
}