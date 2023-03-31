let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { name: "can of beer", type: "alcohol", quantity: 4, price: 1.1 },
    { name: "prosecco", type: "alcohol", quantity: 1, price: 8.99 },
    { name: "steak", type: "food", quantity: 2, price: 3.99 },
    { name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { name: "candles", type: "home", quantity: 3, price: 1.99 },
    { name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { name: "onions", type: "food", quantity: 3, price: 0.4 },
  ];

  function getTotal(shopppingCart, discountAmount,type) {
    let totalPrice = 0;
    for (const item of shoppingCart) {
      if (item.type === "any" || item.type === type) {
        const discount = item.price * item.quantity * (discountAmount / 100); 
      } else {
        totalPrice += item.price * item.quantity;
      }
    }
    
        return totalPrice;
  }

  console.log(getTotal(shoppingCart, 40, 'food'));



  
  function getItemsBetweenPrices(cart, lowPrice, highPrice, quantity = false) {
    const items = [];
    for (const item of cart) {
      const totalPrice = item.price * (quantity ? item.quantity : 1);
      if (totalPrice >= lowPrice && totalPrice <= highPrice) {
        items.push(item);
      }
    }
    return items;
  }
  









