module.exports = function(app) {

	app.get("/api/dogs", function(req, res) {
    res.json(dogList);
	});
	
	app.post("/api/dogs", function(req, res) {

    if (dogList.length < 5) {
      dogList.push(req.body);
      res.json(true);
    }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });
}; 