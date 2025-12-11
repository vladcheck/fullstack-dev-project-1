const MAX_PHONE_WIDTH_PX = 768;

function NavOverlayFactory() {
  const navOverlay = document.createElement("div");
  navOverlay.className = "nav-overlay";
  navOverlay.addEventListener("click", toggleMenu);

  document.body.appendChild(navOverlay);
  return navOverlay;
}

// Получаем элементы
const menuToggle = document.getElementById("phoneMenuToggleBtn");
const sidebar = document.getElementById("sidebar");

// Создаем оверлей для меню
const navOverlay = NavOverlayFactory();

// Функция открытия/закрытия меню
function toggleMenu(e) {
  e.stopPropagation();
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  // Переключаем состояния
  menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  sidebar.classList.toggle("active");
  navOverlay.classList.toggle("active");

  // Блокируем скролл при открытом меню
  document.body.style.overflow = sidebar.classList.contains("active")
    ? "hidden"
    : "";
}

// Обработчики событий
menuToggle.addEventListener("click", (e) => {
  toggleMenu(e);
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll(".sidebar__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= MAX_PHONE_WIDTH_PX) {
      toggleMenu();
    }
  });
});

// Закрытие меню при нажатии Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("active")) {
    toggleMenu();
  }
});

// Закрытие меню при изменении размера окна (если перешли на десктоп)
window.addEventListener("resize", () => {
  if (
    window.innerWidth > MAX_PHONE_WIDTH_PX &&
    sidebar.classList.contains("active")
  ) {
    toggleMenu();
  }
});
