<<<<<<< HEAD
CriminalsShowController.$inject = ['$stateParams','CriminalsService'];
=======
CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

<<<<<<< HEAD
	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
=======
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624
	activate();

	function activate() {
		loadCurrentCriminal();
	}

<<<<<<< HEAD

	// HOW IT DOES STUFF
=======
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624
	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
<<<<<<< HEAD
		//How do we tell which one to load?
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;

=======
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624
			});
	}
}

module.exports = CriminalsShowController;
