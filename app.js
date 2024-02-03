const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
});
