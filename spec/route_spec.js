var request = require('request');
var root = 'http://localhost:3000/';
var menu_items;

describe('JSON Routes', function() {
  describe('data/menu_items.json', function() {
    it('returns an empty array', function(done) {
      request(root + 'menu_items.json', function(e, res, body) {
        menu_items = JSON.parse(body);
        console.log(body);
        expect(menu_items).toBe(undefined);
        done();
      });
    });
  });
});