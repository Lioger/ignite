export const base_url = 'https://api.rawg.io/api';
const key=`key=5c7b95a9bd884161b0a44ad796317c60`;

const currentDate = new Date().toISOString().slice(0, 10);
const lastYear = new Date().getFullYear() - 1;
const nextYear = new Date().getFullYear() + 1;
export const popularGamesURL =
  `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-popularity&page_size=10&${key}`;
export const upcomingGamesURL =
  `${base_url}/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&${key}`;
export const newGamesURL = `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=100&${key}`;

export const getGameDetailsURL = (id) => `${base_url}/games/${id}?${key}`;
export const getGameScreenshotURL = (id) => `${base_url}/games/${id}/screenshots?${key}`;

export const getSearchGameURL = (game_name) => `${base_url}/games?search=${game_name}&page_size=6&${key}`;
