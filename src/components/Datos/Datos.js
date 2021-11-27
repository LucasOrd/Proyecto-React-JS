import { stock } from "./Stock";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 1000);
  });
};

export const pedirItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock.find((el) => el.id === id));
    }, 1000);
  });
};
