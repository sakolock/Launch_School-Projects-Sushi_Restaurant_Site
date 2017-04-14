var App = {
  templates: JST,
  $el: $('main'),
  $content: $('#content'),
  renderMenuView: function() {
    this.menu = new MenuView()
    this.renderItems();
    this.createCart();
    this.bindEvents();
  },
  createCart: function() {
    this.cart = new CartItems();
    this.renderCart();
  },
  renderCart: function() {
    this.cart.view = new CartView({
      collection: this.cart
    });
    this.cart.summary = new CartSummaryView({
      collection: this.cart
    });
  },
  renderInvoice: function() {
    new InvoiceView({
      collection: this.cart
    });
  },
  renderItems: function() {
    this.items.each(this.renderItemView);
  },
  renderItemView: function(item) {
    new ItemView({
      model: item
    });
  },
  renderItemDetails: function(id) {
    new ItemDetailView({
      model: App.items.findWhere({ id: parseInt(id) })
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.cart.view, 'empty_cart', this.cart.emptyCart.bind(this.cart));
    this.on('add_to_cart', this.cart.addItem.bind(this.cart));
    this.on('subtract_from_cart', this.cart.subtractItem.bind(this.cart));
    this.on('reset_cart', this.cart.view.emptyCart.bind(this.cart.view));
  }
};

Handlebars.registerHelper('formatPrice', function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper('convertToKCal', function(kj) {
  return (+kj * 0.2390057361376673).toFixed(4);
})