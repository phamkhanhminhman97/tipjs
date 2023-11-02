var GHNShipping = /** @class */ (function () {
    function GHNShipping() {
    }
    GHNShipping.prototype.create = function () {
        console.log("GHNShippingService: create");
        return 1;
    };
    return GHNShipping;
}());
var TikiShipping = /** @class */ (function () {
    function TikiShipping() {
    }
    TikiShipping.prototype.create = function () {
        console.log("TikiShippingService: create");
        return 1;
    };
    return TikiShipping;
}());
var Orders = /** @class */ (function () {
    function Orders(ship) {
        this.ship = ship;
    }
    Orders.prototype.order = function () {
        return this.ship.create();
    };
    return Orders;
}());
var ghnn = new TikiShipping();
var order1 = new Orders(ghnn);
order1.order();
