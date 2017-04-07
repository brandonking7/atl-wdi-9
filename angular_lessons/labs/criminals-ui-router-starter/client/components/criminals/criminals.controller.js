CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.deleteCriminalFromCtrl = deleteCriminalFromCtrl;
	vm.loading = true;


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}


	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService
			.loadAll()
			.then(function resolve(response) {
				vm.criminals = response.data.criminals;
				vm.loading = false;
			});
	}

	function deleteCriminalFromCtrl(criminal) {
		console.log(criminal)
		CriminalsService
			.deleteCriminalFromService(criminal)
			.then(function(response){
				var index = vm.criminals.indexOf(criminal);
				vm.criminals.splice(index, 1);
			});
	}
}

module.exports = CriminalsController;
