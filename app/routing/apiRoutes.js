var dogs = require('../data/dogs');

module.exports = function(app) {

	app.get("/api/dogs", function(req, res) {
    res.json(dogs);
	});
	
	app.post('/api/dogs', function(req, res) {
		dogs.push(req.body);
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });
}; 