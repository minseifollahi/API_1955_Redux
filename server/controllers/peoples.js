var mongoose = require('mongoose');
var People = mongoose.model('People');
module.exports = (function(){
	return {
		index: function(req, res){
			People.find({}, function(err, results){
				if(err){
					console.log("Couldn't get peeps", results);
				}
				else{
					console.log("Got 'em");
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var newPerson = new People({name: req.body.name});
			newPerson.save(function(err, results){
				if(err){
					console.log('Did not add a person', results);
				}
				else{
					console.log('Added person successfully');
					res.json(results);
				}
			});
		},
		delete: function(req, res){
			People.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log("Could not delte the person", results);
				}
				else{
					console.log("Deleted the person");
					res.json(results);
				}
			});
		}
	}
})();