function convertTitleToLinkFormat(title) {
  let link = title
    .toLowerCase()
    .replace(/[ąćęłńóśżź]/g, (match) => {
      const replacements = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ż: 'z',
        ź: 'z',
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
