var request = require('request');
var root = 'http://localhost:3000';
var menu_items;

describe('JSON Routes', function() {
  describe('data/menu_items.json', function() {
    it('returns an array of objects', function(done) {
      request(root + 'menu_items.json', function(e, res, body) {
        menu_items = JSON.parse(body);
        expect(body[0].name).toBeDefined();
        expect(body.length).toBeDefined();
        done();
      });
    });
  });
});