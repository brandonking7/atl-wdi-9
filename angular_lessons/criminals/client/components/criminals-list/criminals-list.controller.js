// function CriminalsListController(CriminalsService) {
//   var vm = this;
//
//   CriminalsService.getCriminals().then(function (response) {
//     vm.criminalsList = response.data.criminalsList;
//   });
//    //
//    vm.greeting = "Hey today is tough, ";
//    vm.message = CriminalsService.message;
// }
//
// CriminalsListController.$inject = ['CriminalsService'];
//
// module.exports = CriminalsListController;
CriminalsListController.$inject = ['CriminalsService'];


function CriminalsListController (CriminalsService) {
    var vm = this;

    CriminalsService.getCriminals()
        .then(function (response) {
            // console.log(response);
            vm.criminalsList = response.data.criminals;
            // vm.criminalsList = criminalsList;
    });

}



module.exports = CriminalsListController;
