class GHNShippingService {
  create() {
    console.log("GHNShippingService: create");
    return 1;
  }
}

class TikiShippingService {
  create() {
    console.log("TikiShippingService: create");
    return 1;
  }
}

class Order {
  private ghn: GHNShippingService;
  private tiki: TikiShippingService;

  constructor(ghn: GHNShippingService, tiki: TikiShippingService) {
    this.ghn = ghn;
    this.tiki = tiki;
  }

  order() {
    return this.tiki.create();
  }
}

const ghn = new GHNShippingService();
const tiki = new TikiShippingService();

const a = new Order(ghn, tiki);

a.order();

//
