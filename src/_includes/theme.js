document.addEventListener("DOMContentLoaded", () => {
  const toggleEl = document.querySelector(".user-toggle button");
  const statusEl = document.querySelector('.user-toggle [role="status"]');
  const getTheme = () =>
    (localStorage.getItem("theme") ??
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-mode")
        .replace(/\'|"/g, "")
        .trim()) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const setTheme = (setting) => {
    localStorage.setItem("date", Date.now());
    localStorage.setItem("theme", setting);
    return setting;
  };

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

  const date = new Date(+(localStorage.getItem("date") ?? Date.now()));
  const now = new Date(Date.now());
  if ((now - date) / 1000 > 24 * 60 * 60) {
    localStorage.removeItem("theme");
    localStorage.removeItem("date");
  }
  apply();
});
