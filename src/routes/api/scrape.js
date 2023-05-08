import fetch from 'node-fetch';
//import cheerio from 'cheerio';
/*
export async function get() {
  const url = 'https://thegamingsetup.com/gaming-keyboard/buying-guides/keyboard-switch-chart-table';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const data = {
    title: $('title').text(),
    description: $('meta[name="description"]').attr('content'),
  };

  return {
    body: data,
  };
}
*/

export async function get() {
  const url = 'https://thegamingsetup.com/gaming-keyboard/buying-guides/keyboard-switch-chart-table';
  const response = await fetch(url);
  const body = await response.text();
  return { body };
}
