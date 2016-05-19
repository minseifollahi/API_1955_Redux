var peoples = require('./../controllers/peoples.js');
module.exports = function(app){
	app.get('/people', function(req, res){
		peoples.index(req,res);
	});

	app.post('/people', function(req, res){
		peoples.create(req, res);
	});

	app.post('/delete/:id', function(req, res){
		peoples.delete(req, res);
	});
};