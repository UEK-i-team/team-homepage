function convertTitleToLinkFormat(title) {
  let link = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ł]/g, (match) => {
      const replacements = {
        ł: 'l',
      };
      return replacements[match];
    })
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  if (link[link.length - 1] === '-') link = link.slice(0, link.length - 1);

  return link;
}

module.exports = { convertTitleToLinkFormat };
