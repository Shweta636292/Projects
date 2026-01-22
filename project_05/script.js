const signInBtn = document.querySelector(".signInBtn-link");
const signUpBtn = document.querySelector(".signUp-link");
const wrapper = document.querySelector(".wrapper");
signUpBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signInBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
});