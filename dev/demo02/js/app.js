
	var app = angular.module("twocan-app", ["ngRoute"]);
	
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
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
			});
	});
	
	app.controller("mainController", function($scope)
	{
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
		
		$scope.message = 'This is the home page !';
	});
	
	
	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
	
	
	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	