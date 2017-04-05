 angular
  .module('storeApp')
  .controller('ProductsController', ProductsController)
  .controller('ReviewsController', ReviewsController)
  .controller();

function ProductsController() {

  this.add = addStuff;
  this.all = [
    { name: 'Surface Book', price: 1500.43, dateAdded: 1490929458881 },
    { name: 'MacBook Pro 15"', price: 1800.34, dateAdded: 1490929458881 },
    { name: 'Macbook Pro 13"', price: 1600.28, dateAdded: 1490929458881 },
    { name: 'TI-86', price: 100.43, dateAdded: 1490929458881 },
    { name: 'UE Roll Speaker', price: 80.48, dateAdded: 1490929458881 },
  ];

  this.newStuff = {name: '', price: '', dateAdded: ''};

  function addStuff() {
    this.all.push({name: this.newStuff.name, price: this.newStuff.price, dateAdded: this.newStuff.dateAdded});
  };

}
function ReviewsController() {
  this.productCategories = [
  	'Smartphones',
  	'Bluetooth Speakers',
  	'Video Games'
  ]
}
