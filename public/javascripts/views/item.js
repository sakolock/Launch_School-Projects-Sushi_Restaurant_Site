var ItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.item,
  events: {
    "click a.add_cart": "addToCart",
    "click header": "showItemDetails"
  },
  addToCart: function(e) {
    e.preventDefault();

    App.trigger('add_to_cart', this.model);
  },
  showItemDetails: function() {
    var id = this.model.get('id');

    router.navigate('/menu/' + id, { trigger: true });
  },
  render: function() {
    var id = this.model.get('id');

    this.$el.attr('data-id', id);
    this.$el.html(this.template(this.model.toJSON()));
    $('#items').find('ul').append(this.$el);
  },
  initialize: function() {
    this.render();
  }
});