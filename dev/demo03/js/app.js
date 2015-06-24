
	var app = angular.module("twocan-app", ["ngRoute", "ngAnimate", "textAngular"]);

	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			.otherwise({ redirectTo	: '/' });

	});

	app.controller("mainController", function($scope)
	{

		// WYSIWYG
		$scope.editDisabled = true;
		$scope.customStyle= ".ta-toolbar{ display:none; }";
		$scope.toggleActiveEditor = function(){
			if ( $scope.editDisabled )
			{
				$scope.editDisabled = false;
				$scope.customStyle= "";
			}
			else
			{
				$scope.editDisabled = true;
				$scope.customStyle= ".ta-toolbar{ display:none; }";
			}
		};
		/////////

	});


	app.controller('homeController', function($scope) {
		$scope.pageClass = 'page-home';
		$scope.message = 'This is the home page !';
	});

	app.controller('aboutController', function($scope) {
		$scope.pageClass = 'page-about';
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.pageClass = 'page-contact';
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
