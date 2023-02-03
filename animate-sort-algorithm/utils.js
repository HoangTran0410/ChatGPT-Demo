export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    await sleep(10);
  }
  return array;
}
