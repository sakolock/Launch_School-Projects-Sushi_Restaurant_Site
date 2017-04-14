var router = new (Backbone.Router.extend({
  routes: {
    "menu/:id": "renderItemDetails",
    "checkout": "createInvoice"
  },
  menu: function() {
    App.renderMenuView();
    this.navigate('/');
  },
  renderItemDetails: function(id) {
    App.renderItemDetails(id);
  },
  createInvoice: function() {
    App.renderInvoice();    
  },
  initialize: function() {
    this.route(/^\/?$/, 'index', this.menu);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});