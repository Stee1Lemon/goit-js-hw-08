import LoDashStatic from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK = 'feedback-form-state';

formEl.addEventListener('input', LoDashStatic(checkForm, 500));
formEl.addEventListener('submit', doSubmit);
// document.addEventListener('click', test);

// function test() {
//   console.log(infoEl);
// }

let infoEl = {
  email: '',
  message: '',
};

isInfoInLocalStorage();

function isInfoInLocalStorage() {
  if (localStorage.getItem(FEEDBACK) !== null) {
    const savedFeedback = localStorage.getItem(FEEDBACK);
    const parsedFeedback = JSON.parse(savedFeedback);
    formEl.email.value = parsedFeedback.email;
    formEl.message.value = parsedFeedback.message;
  } else {
    formEl.email.value = '';
    formEl.message.value = '';
  }
}

function checkForm(event) {
  if (event.target.name === 'email') {
    infoEl.email = event.target.value;
  } else {
    infoEl.message = event.target.value;
  }

  localStorage.setItem(FEEDBACK, JSON.stringify(infoEl));
}

function doSubmit(event) {
  event.preventDefault();

  try {
    const savedFeedback = localStorage.getItem(FEEDBACK);
    const parsedFeedback = JSON.parse(savedFeedback);
    if (parsedFeedback.email === '' || parsedFeedback.message === '') {
      return alert('Please, write in both fields');
    } else {
      console.log(parsedFeedback);
      backToOrigin();
    }
  } catch {}
}

function backToOrigin() {
  formEl.email.value = '';
  formEl.message.value = '';
  infoEl.email = '';
  infoEl.message = '';
  localStorage.removeItem(FEEDBACK);
}
