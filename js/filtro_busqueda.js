export default function searchFilter(input, selector) {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      console.log(e.target.value);

      if (e.key === "Escape") {
        e.target.value = "";
      }

      document
        .querySelectorAll(selector)
        .forEach((el) =>
          el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? el.classList.remove("filter")
            : el.classList.add("filter")
        );
    }
  });
}
