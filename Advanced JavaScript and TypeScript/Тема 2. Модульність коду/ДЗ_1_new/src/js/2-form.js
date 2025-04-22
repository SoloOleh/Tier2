const refs = {
  feedbackForm: document.querySelector(".feedback-form"),
};

let formData = {};

const fillFormFields = (feedbackForm) => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem("feedback-form-state")
    );

    if (formDataFromLS === null) {
      return;
    }

    formData = formDataFromLS;

    const formDataKeys = Object.keys(formDataFromLS);

    formDataKeys.forEach((key) => {
      feedbackForm.elements[key].value = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFormFields(refs.feedbackForm);

const onFieldInput = (event) => {
  const formField = event.target;
  const formFieldName = formField.name;
  const formFieldValue = formField.value;

  formData[formFieldName] = formFieldValue;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const onFeedbackFormSubmit = (event) => {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert("Будь ласка заповніть усі поля!");
    return;
  }

  event.target.reset();
  localStorage.removeItem("feedback-form-state");
};

refs.feedbackForm.addEventListener("input", onFieldInput);
refs.feedbackForm.addEventListener("submit", onFeedbackFormSubmit);
