var InvoiceItemView = Backbone.View.extend({
  tagName: 'tr',
  template: App.templates.invoice_item,
  events: {
    "click .fa-plus": "incrementItem",
    "click .fa-minus": "decrementItem"
  },
  incrementItem: function(e) {
    App.trigger('add_to_cart', this.model);
  },
  decrementItem: function(e) {
    App.trigger('subtract_from_cart', this.model);
  },
  render: function() {
    var id = this.model.get('id');

    this.$el.attr('data-id', id);
    this.$el.html(this.template(this.model.toJSON()));
    $('#checkout tbody').append(this.$el);
  },
  initialize: function() {
    this.render();
  }
});