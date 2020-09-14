function addToCart(cart, products, name, counts) {
  const newCart = [...cart];

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      newCart.push({ name, counts });
    }
  }
  return newCart;
}

function stockMinus(products, cart) {
  const newCart = [...cart];
  let updateStock = [...products];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < newCart.length; j++) {
      if (products[i].name === newCart[j].name) {
        products[i].stock -= newCart[j].counts;
      }
    }
  }
  return updateStock;
}

function countPrice(cart, products) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (products[j].name === cart[i].name) {
        totalPrice += products[j].price * cart[i].counts;
      }
    }
  }
  return totalPrice;
}

function changeMoney(customer, price) {
  const newUpdate = { ...customer };

  newUpdate.money -= price;

  return newUpdate;
}

function printReceipt(cart, products, subject) {
  const receipt = {
    cashier: subject.cashier,
    customer: subject.customer,
    products: [],
    createdAt: new Date(),
    total: 0,
  };

  cart.forEach((e) => {
    const { price } = products.find((el) => el.name === e.name);
    receipt.products.push({
      name: e.name,
      quantity: e.counts,
      price,
    });
    receipt.total += price * e.counts;
  });

  return receipt;
}
