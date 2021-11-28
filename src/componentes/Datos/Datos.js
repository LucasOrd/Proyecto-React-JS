import { Stock } from "../Stock/Stock";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Stock);
    }, 1000);
  });
};

export const pedirItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Stock.find((el) => el.id === id));
    }, 1000);
  });
};
