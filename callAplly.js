function getPrice(tax = 0, currency = "R$") {
  return `${this.price * (1 - this.disc) * (1 + tax)}`;
}

const product = {
  name: "Notebook",
  price: 4999.99,
  disc: 0.15,
  getPrice,
};

console.log(getPrice());
console.log(product.getPrice());

const car = {
  price: 50000.0,
  disc: 0.2,
};

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log(getPrice.call(car, 0.17));
console.log(getPrice.apply(car, [0.17]));
