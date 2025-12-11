// Кнопка "Наверх"
const scrollTopButton = document.getElementById("scrollTop");

// Показываем кнопку после скролла
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});

// Прокрутка к началу страницы
scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
