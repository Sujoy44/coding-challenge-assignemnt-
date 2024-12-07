const items = {
    "Laptop": 500,
    "Phone": 300,
    "Tablet": 200
  };
  
  const exchangeRate = 80;
  
  const itemsInRupees = Object.keys(items).reduce((acc, item) => {
    acc[item] = items[item] * exchangeRate;
    return acc;
  }, {});
  
  console.log(itemsInRupees);