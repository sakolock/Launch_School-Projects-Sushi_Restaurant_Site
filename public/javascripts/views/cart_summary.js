var CartSummaryView = Backbone.View.extend({
  $el: $('header .cart'),
  template: App.templates.cart_summary,
  render: function() {
    var quantity = this.collection ? this.collection.getQuantity() : 0;

    this.$el.html(this.template({
      totalItems: quantity
    }));

    $('header .cart').html(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});