var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    var existing = this.get(item.get('id'));

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }

    this.update();
  },
  subtractItem: function(item) {
    var id = item.get('id');
    var currentQuantity = item.get('quantity');

    if (currentQuantity > 1) {
      item.set('quantity', item.get('quantity') - 1);
    } else {
      this.destroy(id);
    }

    this.update();
  },
  destroy: function(id) {
    this.remove(id);
    this.update();
  },
  emptyCart: function() {
    this.reset();
    this.update();
  },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);
    
    return this;
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);

    return this;
  },
  getQuantity: function() { return this.quantity; },
  readStorage: function() {
    var storedCart = JSON.parse(localStorage.getItem('sushiCart'));
    
    this.reset(storedCart);
    this.setTotal().setQuantity();
  },
  updateStorage: function() {
    localStorage.setItem('sushiCart', JSON.stringify(this.toJSON()));
  },
  update: function() {
    this.setTotal().setQuantity().updateStorage();
    this.trigger('cart_updated');
  },
  initialize: function() {
    this.readStorage();
    this.on('destroy', this.destroy);
    this.listenTo(this.view, 'empty_cart', this.emptyCart);
  }
});