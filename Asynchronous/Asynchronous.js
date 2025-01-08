  //order task
  function placeOrder(order, callback) {
    console.log(`Placing order for ${order}`);
    setTimeout(() => {
      console.log(`Order for ${order} has been placed.`);
      callback(order);
    }, 2000);
}

function prepareOrder(order, callback) {
    console.log(`preparing: ${order}`);
    setTimeout(() => {
      console.log(`${order} is ready`);
      callback(order);
    }, 3000);
}

function packageOrder(order, callback) {
    console.log(` packaging:${order}`);
    setTimeout(() => {
      console.log(`${order} has been packaged.`);
      callback(order);
    }, 2000);
}

function deliverOrder(order, callback) {
    console.log(` Delivering${order}`);
    setTimeout(() => {
      console.log(`${order} has been delivered`);
      callback(order);
    }, 4000);
}

function processOrder(order) {
    placeOrder(order, (placedOrder) => {
      prepareOrder(placedOrder, (preparedOrder) => {
        packageOrder(preparedOrder, (packagedOrder) => {
          deliverOrder(packagedOrder, () => {
            console.log("Order process completed successfully.");
          });
        });
      });
    });
}
processOrder("bizza")