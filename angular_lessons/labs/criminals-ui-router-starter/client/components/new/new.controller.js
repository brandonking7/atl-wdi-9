NewController.$inject = ['CriminalsService', '$state'];

function NewController(CriminalsService, $state) {
  const vm = this;


  vm.addCriminal = addCriminal;
  vm.newCriminal = {};

  activate();

  function activate() {
  }

  function addCriminal() {
    CriminalsService.addCriminal(vm.newCriminal).then(function () {
      //go to getCriminals
      vm.newCriminal = {};
      $state.go('criminals');
    });
  }
}

module.exports = NewController;
