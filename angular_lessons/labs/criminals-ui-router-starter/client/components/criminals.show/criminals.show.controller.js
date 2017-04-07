CriminalsShowController.$inject = ['$stateParams','CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadCurrentCriminal();
	}


	// HOW IT DOES STUFF
	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
		//How do we tell which one to load?
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;

			});
	}
}

module.exports = CriminalsShowController;
