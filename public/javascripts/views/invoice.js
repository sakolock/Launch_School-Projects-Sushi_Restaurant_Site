var InvoiceView = Backbone.View.extend({
  attributes: {
    id: 'checkout'
  },
  template: App.templates.invoice,
  events: {
    "submit": "resetPage",
    "click footer a": "resetPage"
  },
  resetPage: function(e) {
    e.preventDefault();

    App.trigger('reset_cart');
    this.remove()
    router.navigate('/', { trigger: true });
  },
  isVisible: function() {
    return !!$('#checkout')[0];
  },
  renderIfVisible: function() {
    if (this.isVisible()) { this.render(); }
  },
  render: function() {
    this.$el.html(this.template({
      totalPrice: this.collection.getTotal()
    }));

    App.$content.html(this.$el);
    this.collection.each(this.renderItemView.bind(this));
    this.delegateEvents();
  },
  renderItemView: function(item) {
    new InvoiceItemView({
      model: item
    });
  },
  initialize: function() {
    this.render();
    this.listenTo(App.cart, 'cart_updated', this.renderIfVisible.bind(this));    
  }
});