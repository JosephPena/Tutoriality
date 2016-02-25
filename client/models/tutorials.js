var m = require('mithril');
var _ = require('underscore');

var User = require('./users');
var Tutorial = module.exports;

// fetches all tutorials from the api
Tutorial.fetchAll = function() {
	return m.request({method : 'GET', url : '/api/tutorials'});
}
//fetches a tutorial by unique id created by database
Tutorial.fetchByID = function(id) {
	return m.request({method : 'GET', url : '/api/tutorials/' + id});
}
Tutorial.fetchByUserID = function(userID) {
  console.log("the userId", userID)
  return m.request({method : 'GET', url : '/api/tutorials?created_by=' + userID});
}
//creates a new database entry for a given tutorial
Tutorial.create = function(tutorial) {
	return m.request({method : 'POST', url : '/api/tutorials', data : tutorial});
}
//updates a tutorial by the id given to it
Tutorial.updateByID = function(id, tutorial) {
  return m.request({method : 'PUT', url : '/api/tutorials/' + id, data : tutorial});
}
//Tutorial object view model creator
Tutorial.tutorialVM = function () {
  return {
    title: '',
    description: '',
    steps: [ Tutorial.stepVM() ],
    created_by : User.getID(),
  }
}
//Step object view model creator
Tutorial.stepVM = function () {
  return {
    title: '',
    content: ''
  }
}
