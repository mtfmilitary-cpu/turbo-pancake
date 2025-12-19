export const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
export const load = (k, d) =>
  JSON.parse(localStorage.getItem(k)) ?? d;
