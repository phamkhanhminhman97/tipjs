interface Shipping {
  create();
}

class GHNShipping implements Shipping {
  create() {
    console.log("GHNShippingService: create");
    return 1;
  }
}

class TikiShipping implements Shipping {
  create() {
    console.log("TikiShippingService: create");
    return 1;
  }
}

class Orders {
  private ship: Shipping;

  constructor(ship: Shipping) {
    this.ship = ship
  }

  order() {
    return this.ship.create();
  }
}

const ghnn = new GHNShipping();



const order1 = new Orders(ghnn);

order1.order();



