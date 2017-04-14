var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/menu_items.json');
var MenuItems = require(path.dirname(__dirname) + '/routes/menu_node');

module.exports = function(router) { 
  router.get('/', function(req, res) {
    res.render('index', {
      items: MenuItems.get()
    });
  });
}