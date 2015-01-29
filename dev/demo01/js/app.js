
	var app = angular.module("twocan-app", ["textAngular"]);
	
	app.controller("mainCtrlr", ["$scope", function($scope)
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
	}]);