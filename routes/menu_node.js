var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/menu_items.json');

var MenuItems = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  }
};

module.exports = MenuItems;