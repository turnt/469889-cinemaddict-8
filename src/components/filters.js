const createFilterTemplate = (
    {
      url = ``,
      active = false,
      label = ``,
      count = 0,
      additional = false
    } = {}
) => {
  const blockName = `main-navigation__item`;
  const className = `
    ${blockName}
    ${active ? ` ${blockName}--active` : ``}
    ${additional ? ` ${blockName}--additional` : ``}
  `;

  const countTemplate = count > 0 ? `<span class="${blockName}__item-count">${count}</span>` : ``;

  return `
    <a href="#${url}" class="${className}">
      ${label} ${countTemplate}
    </a>
  `;
};

const mergeFilters = (node) => createFilterTemplate(node);
const buildFiltersTemplate = (arr = []) => arr.map(mergeFilters).join(``);

export default buildFiltersTemplate;
