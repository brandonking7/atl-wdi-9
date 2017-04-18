const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminalsShow', component);//calls with <criminal-show>
=======
	// call this with <criminals-show></criminals-show>
	.component('criminalsShow', component);
>>>>>>> 044187711a26aa315ae6b84b48125458d5579624
