const form=document.querySelector(".form"),input=document.querySelector(".form__input"),submit=document.querySelector(".form__submit"),msg=document.querySelector(".form__input-msg");function validateEmail(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(e)}function handleSubmit(e){e.preventDefault(),validateEmail(input.value)?msg.textContent="":msg.textContent="Please enter a valid email address"}form.addEventListener("submit",handleSubmit),submit.addEventListener("click",handleSubmit);
//# sourceMappingURL=index.832d0a02.js.map
