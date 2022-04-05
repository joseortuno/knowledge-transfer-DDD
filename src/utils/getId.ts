export const createId = (): number => {
  return Math.floor(Math.random() * (1000000000 - 1 + 1)) + 1;
};
