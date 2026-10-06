const filters = document.querySelectorAll<HTMLButtonElement>(".filter");
const cards = document.querySelectorAll<HTMLElement>(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const value = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    cards.forEach((card) => {
      const tags = card.dataset.tags?.split(",") ?? [];

      card.style.display =
        value === "all" || (value && tags.includes(value)) ? "" : "none";
    });
  });
});