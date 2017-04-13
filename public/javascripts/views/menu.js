var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items'
  },
  template: App.templates.menu, 
  render: function() {
    this.$el.html(this.template());
    App.$el.find('#content').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});