import throttle from 'lodash.throttle';
import isEmail from 'validator/es/lib/isEmail';


const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = getStorage(STORAGE_KEY);

form.addEventListener('input', throttle(storeFormInput, 500));
form.addEventListener('submit', onSubmit);



// Сохраняет данные в localStorage

function storeFormInput(e) {
  saveStorage(e, formData);
}

function saveStorage({ target: { value, name } }, formData) {
    formData[name] = value;
  
    try {
      const formDataMakeJson = JSON.stringify(formData);
      localStorage.setItem(STORAGE_KEY, formDataMakeJson);
    } catch (error) {
      console.error(error.message);
    }
  }



// Получает данные из localStorage

function getStorage(key) {
    const savedData = localStorage.getItem(key);
  
    if (!savedData) {
      return {};
    }
  
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.log(error.message);
    }
  }



// Ставит начальные значения в форме

setCommon();

function setCommon() {
  if (formData.length === 0) {
    return;
  }

  const { elements } = form;
  const keysFormData = Object.keys(formData);

  keysFormData.forEach(key => {
    elements[key].value = formData[key];
  });
}


// Настройка сабмита формы

function onSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.target;

  if (!isEmail(email.value)) {
    alert('Email должен быть валидным');
    return;
  }

  if (!message.value) {
    alert('Заполните пожалуйста поле message');
    return;
  }

  console.log(formData);
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}