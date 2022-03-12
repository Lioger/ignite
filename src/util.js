export const smallImage = (imagePath, size) => {
  if (!imagePath) return imagePath;
  return imagePath.match(/media\/screenshots/)
  ? imagePath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
  : imagePath.replace("media/games", `media/resize/${size}/-/games`);
}
