const toggleEl = document.querySelector(".user-toggle button");
const statusEl = document.querySelector('.user-toggle [role="status"]');
const getTheme = () =>
  localStorage.getItem("theme") ??
  getComputedStyle(document.documentElement)
    .getPropertyValue("--color-mode")
    .replace(/\'|"/g, "")
    .trim();

const setTheme = (setting) => (localStorage.setItem("theme", setting), setting);

const invert = (theme) => (theme === "dark" ? "light" : "dark");

const apply = (setting = getTheme()) => {
  document.documentElement.classList.add(setting);
  document.documentElement.classList.remove(invert(setting));
  statusEl.innerText = `Color mode is now "${setting}"`;
};

toggleEl.addEventListener(
  "click",
  (evt) => void (evt.preventDefault(), apply(setTheme(invert(getTheme())))),
);

apply();
