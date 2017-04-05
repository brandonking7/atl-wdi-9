angular.module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

  function CriminalsController($http) {
    var vm = this;

    vm.addCriminal = addCriminal;
    vm.all = [];
    vm.loadingAll = true;
    vm.newCriminal = {};
    vm.removeCriminal = removeCriminal;

    activate();

    function activate() {
      loadAllCriminals();
    }

    function loadAllCriminals() {
      $http
        .get('/criminals')
        .then(function resolve(response) {
          console.log(response);
          vm.all = response.data.criminals;
          vm.loadingAll = false;

        });
    }

    function addCriminal() {
      $http
        .post('/criminals', vm.newCriminal)
        .then(function someName(response) {
          vm.all.push(response.data.criminal);
          vm.newCriminal = {};
        });

    }

    function removeCriminal(criminal) {
      $http
        .delete('/criminals/' + criminal._id)
        .then(function reset(response) {
          vm.all = vm.all.filter(function(currentlyIteratedCriminal) {
            return criminal._id !== currentlyIteratedCriminal._id;
          });
        });
    }

  }
