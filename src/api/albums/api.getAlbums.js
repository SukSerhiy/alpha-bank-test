/**
 * Fetch albums from https://jsonplaceholder.typicode.com
 * @param {Object} params - Params of fetching 
 * @param {number|string} params.page - Page number
 * @param {number|string} params.limit - Conut of records
 * @param {string} params.searchStr - Text fragment for full-text search
 */

const getAlbums =  async (params) => {
  const finalUrl = Object.keys(params)
    .filter(k => params[k] !== null)
    .reduce((url, p, i, arr) => {
      let urlPart = '';
      if (i === 0) {
        urlPart += '?';
      }
      const value = params[p];
      if (p === 'page') {
        urlPart += `_page=${value}`;
      } else if (p === 'limit') {
        urlPart += `_limit=${value}`;
      } else if (p === 'searchStr') {
        urlPart += `q=${encodeURIComponent(value)}`;
      }
      if (i < arr.length - 1) {
        urlPart += '&';
      }
      return url + urlPart;
    }, 'https://jsonplaceholder.typicode.com/albums');
  const res = await fetch(finalUrl);
  return await res.json();
}

export default getAlbums;