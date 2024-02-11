const Arrows = document.querySelectorAll(".arrow");
const Movielists = document.querySelectorAll(".movie-list");

Arrows.forEach((arrow, i) => {
  const itemNumber = Movielists[i].querySelectorAll("img").length;
  let clickCount = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 300);
    clickCount++;
    if (itemNumber - (4 + clickCount) + (4 - ratio) >= 0) {
      Movielists[i].style.transform = `translateX(${
        Movielists[i].computedStyleMap().get("transform")[0].x.value - 330
      }px)`;
    } else {
      Movielists[i].style.transform = "translateX(0)";
      clickCount = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar,.logo,.menu-container,.sidebar,.left-menu-icon,.toggle,.movie-list-item-title,.movie-list-item-desc,.movie-list-item-button"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
// search

const search = document.querySelector(".search");
const Input = document.querySelector(".sidebarItem");

search.addEventListener("click", () => {
  Input.classList.toggle("start");
});
const home = document.querySelector(".home");

home.addEventListener("click", () => {
  window.location.href = "#";
});

const users = document.querySelector(".users");
users.addEventListener("click", () => {
  alert("Hozircha foydalanuvchilar mavjud emas!");
});

const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("save");
});

const shopping = document.querySelector(".shopping-cart");
shopping.addEventListener("click", () => {
  alert("Hozircha xarid qila olmaysiz");
});
