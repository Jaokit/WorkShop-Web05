const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("header .nav");
if (menuBtn)
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

const page = document.body?.dataset?.page || "";
document.querySelectorAll(".navlinks a[data-nav]").forEach((a) => {
  if (a.dataset.nav === page) a.classList.add("active");
});
