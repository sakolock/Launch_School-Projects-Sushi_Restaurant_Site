var ItemDetailView = Backbone.View.extend({
  template: App.templates.item_details,
  events: {
    "click .close": "closeDetailView",
    "click .add_cart": "addToCart",
    "click .nav": "switchItem"
  },
  switchItem: function(e) {
    var $targetItem = $(e.currentTarget);
    var id = this.model.get('id');
    var targetId;
    var direction;

    if ($targetItem.hasClass('next')) {
      targetId = id + 1 > App.items.length ? 1 : id + 1;
      direction = 'right';
    } else {
      targetId = id - 1 < 1 ? App.items.length : id - 1;
      direction = 'left';
    }

    this.slideItem(targetId, direction);
  },
  slideItem: function(id, direction) {
    var $item = this.$el.find('#item_details > div');
    var itemWidth = $item.css('width');
    var leftPos = 0;

    direction === 'left' ? leftPos = itemWidth : leftPos;

    this.$el.find('#item_details > div').animate({
      position: 'absolute',
      width: '-=' + itemWidth,
      left: '+=' + leftPos
    }, 50, function() {
      this.remove();
      router.navigate('/menu/' + parseInt(id), { trigger: true });
    });
  },
  closeDetailView: function(e) {
    e.preventDefault();

    this.remove();
    router.navigate('/', { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();

    App.trigger('add_to_cart', this.model);
  },
  render: function() {
    var id = this.model.get('id');

    this.$el.html(this.template(this.model.toJSON()));
    $('#content').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});