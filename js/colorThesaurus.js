var app = angular.module('app',[]);

app.controller('ColorCtrl', function($scope, $http) {
	$scope.updateColors = function() {
		if($scope.currentColor.name === 'White') {
			$scope.rows = $scope.white;
		} else if($scope.currentColor.name === 'Tan'){
			$scope.rows = $scope.tan;
		} else if($scope.currentColor.name === 'Yellow'){
			$scope.rows = $scope.yellow;
		} else if($scope.currentColor.name === 'Orange'){
			$scope.rows = $scope.orange;
		} else if($scope.currentColor.name === 'Red') {
			$scope.rows = $scope.red;
		} else if($scope.currentColor.name === 'Pink') {
			$scope.rows = $scope.pink;
		} else if($scope.currentColor.name === 'Purple') {
			$scope.rows = $scope.purple;
		} else if($scope.currentColor.name === 'Blue') {
			$scope.rows = $scope.blue;
		} else if($scope.currentColor.name === 'Green') {
			$scope.rows = $scope.green;
		} else if($scope.currentColor.name === 'Brown') {
			$scope.rows = $scope.brown;
		} else if($scope.currentColor.name === 'Grey') {
			$scope.rows = $scope.grey;
		} else {
			$scope.rows = $scope.black;
		}
	};

	var setup = function() {
		$scope.colors = [
			{ name:'White', textColor:'#000000' },
			{ name:'Tan', textColor:'#000000' },
			{ name:'Yellow', textColor:'#000000' },
			{ name:'Orange', textColor:'#000000' },
			{ name: 'Red', textColor:'#FFFFFF' },
			{ name: 'Pink', textColor:'#000000' },
			{ name: 'Purple', textColor:'#FFFFFF' },
			{ name: 'Blue', textColor:'#FFFFFF' },
			{ name: 'Green', textColor:'#000000' },
			{ name: 'Brown', textColor:'#FFFFFF' },
			{ name: 'Grey', textColor:'#FFFFFF' },
			{ name: 'Black', textColor:'#FFFFFF' }
		];

		$scope.currentColor = $scope.colors[0];

		$http.get('data/white.json').success(function(data){
			$scope.white = data;
			$scope.rows = $scope.white;
		});

		$http.get('data/tan.json').success(function(data) {
			$scope.tan = data;
		});

		$http.get('data/yellow.json').success(function(data) {
				$scope.yellow = data;
		});

		$http.get('data/orange.json').success(function(data) {
				$scope.orange = data;
		});

		$http.get('data/red.json').success(function(data) {
				$scope.red = data;
		});

		$http.get('data/pink.json').success(function(data) {
			$scope.pink = data;
		});

		$http.get('data/purple.json').success(function(data) {
			$scope.purple = data;
		});

		$http.get('data/blue.json').success(function(data) {
			$scope.blue = data;
		});

		$http.get('data/green.json').success(function(data) {
			$scope.green = data;
		});

		$http.get('data/brown.json').success(function(data) {
			$scope.brown = data;
		});

		$http.get('data/grey.json').success(function(data) {
			$scope.grey = data;
		});

		$http.get('data/black.json').success(function(data) {
			$scope.black = data;
		});
	}

	setup();
});
