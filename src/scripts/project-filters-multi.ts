const filters = document.querySelectorAll<HTMLButtonElement>(".filter");
const cards = document.querySelectorAll<HTMLElement>(".project-card");

const selectedFilters = new Set<string>();

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const value = filter.dataset.filter;

    if (!value) return;

    if (value === "all") {
      selectedFilters.clear();
      filters.forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");
    } else {
      document
        .querySelector<HTMLButtonElement>('[data-filter="all"]')
        ?.classList.remove("active");

      if (selectedFilters.has(value)) {
        selectedFilters.delete(value);
        filter.classList.remove("active");
      } else {
        selectedFilters.add(value);
        filter.classList.add("active");
      }

      if (selectedFilters.size === 0) {
        document
          .querySelector<HTMLButtonElement>('[data-filter="all"]')
          ?.classList.add("active");
      }
    }

    cards.forEach((card) => {
      const tags = card.dataset.tags?.split(",") ?? [];

      const matches =
        selectedFilters.size === 0 ||
        tags.some((tag) => selectedFilters.has(tag));

      card.style.display = matches ? "" : "none";
    });
  });
});