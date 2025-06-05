
document.querySelectorAll('.button--primary').forEach((btn) => {
  btn.addEventListener("click", () => {
    document.location.href = 'https://globel.in/finances';
  })
})

const burger = document.querySelector('.burger-button');
  const nav = document.querySelector('.header nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });