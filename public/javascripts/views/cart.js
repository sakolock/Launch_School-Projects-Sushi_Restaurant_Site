var CartView = Backbone.View.extend({
  el: $('#cart').get(0),
  template: App.templates.cart,
  attributes: {
    display: 'none'
  },
  events: {
    'click .empty_cart': 'emptyCart'
  },
  emptyCart: function(e) {
    if (e)  { e.preventDefault(); }

    this.hideCart();
    this.trigger('empty_cart');
  },
  showCart: function() {
    this.$el.slideDown();
  },
  hideCart: function() {
    this.$el.slideUp();
  },
  render: function() {
    var totalPrice = this.collection.getTotal();

    this.$el.html(this.template({
      items: this.collection.toJSON(),
      totalPrice: totalPrice
    }));

    if (totalPrice > 0 && this.$el.next().find('#checkout').length === 0) { this.showCart(); }
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});