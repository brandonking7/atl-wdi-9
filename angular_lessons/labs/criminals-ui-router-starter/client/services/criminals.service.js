angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
	self.addCriminal = addCriminal;
	self.deleteCriminalFromService = deleteCriminalFromService;
=======
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
<<<<<<< HEAD

	function addCriminal(newCriminal) {
		return $http.post('/api/criminals/', newCriminal);
	}

	function deleteCriminalFromService(criminal) {
		return $http.delete('/api/criminals/' + criminal._id);
	}
=======
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624
}
