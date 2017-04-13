var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/menu_items.json');
var MenuItems = require(path.dirname(__dirname) + '/routes/menu_node');

module.exports = function(router) { 
  router.get('/menu', function(req, res, next) {
    res.render('menu', {
      items: MenuItems.get()
    });
  });

  router.get('/menu/:id', function(req, res) {
    res.render('menu', {
      items: MenuItems.get()
    });
  });
}