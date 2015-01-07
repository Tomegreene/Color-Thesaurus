var app = angular.module('app',[]);

app.controller('ColorCtrl', function($scope) {
	$scope.colors = [
		{ name:'White', textColor:'#000000' },
		{ name:'Tan', textColor:'#000000' }
	];

	$scope.currentColor = $scope.colors[0];

	$scope.updateColors = function() {
		if($scope.currentColor.name === 'White') {
			$scope.rows = $scope.white;
		} else {
			$scope.rows = $scope.tan;
		}
	};

	$scope.white = [
		[{
			name: 'White',
			value: '#FFFEFC'
		},
		{
			name: 'Pearl',
			value: '#FBFCF7'
		},
		{
			name: 'Alabaster',
			value: '#FEFAF1'
		},
		{
			name: 'Snow',
			value: '#F5FEFD'
		}],
		[{
			name: 'Ivory',
			value: '#FDF6E4'
		},
		{
			name: 'Cream',
			value: '#FFFADA'
		},
		{
			name: 'Egg Shell',
			value: '#FEF9E3'
		},
		{
			name: 'Cotton',
			value: '#FBFCF7'
		}],
		[{
			name: 'Chiffon',
			value: '#FAFAF2'
		},
		{
			name: 'Salt',
			value: '#F7EFEC'
		},
		{
			name: 'Lace',
			value: '#FAF3EB'
		},
		{
			name: 'Coconut',
			value: '#FFF1E6'
		}],
		[{
			name: 'Linen',
			value: '#F2EAD3'
		},
		{
			name: 'Bone',
			value: '#E7DFCC'
		},
		{
			name: 'Daisy',
			value: '#FFFFFF'
		},
		{
			name: 'Powder',
			value: '#FBFCF7'
		}],
		[{
			name: 'Frost',
			value: '#ECFCFC'
		},
		{
			name: 'Porcelain',
			value: '#FFFEFC'
		},
		{
			name: 'Parchment',
			value: '#FBF5DF'
		},
		{
			name: 'Rice',
			value: '#FAF5EF'
		}]
	];

	$scope.tan = [
		[{
			name: 'Tan',
			value: '#E6DBAD'
		},
		{
			name: 'Beige',
			value: '#ECDD9A'
		},
		{
			name: 'Macaroon',
			value: '#F8E076'
		},
		{
			name: 'Hazel wood',
			value: '#C9BB8E'
		}],
		[{
			name: 'Granola',
			value: '#D6B75A'
		},
		{
			name: 'Oat',
			value: '#DEC98A'
		},
		{
			name: 'Egg nog',
			value: '#FAE29A'
		},
		{
			name: 'Fawn',
			value: '#C7A951'
		}],
		[{
			name: 'Sugar cookie',
			value: '#F3EBAD'
		},
		{
			name: 'Sand',
			value: '#D7B963'
		},
		{
			name: 'Sepia',
			value: '#E3B778'
		},
		{
			name: 'Latte',
			value: '#DFC17B'
		}],
		[{
			name: 'Oyster',
			value: '#DCD7A0'
		},
		{
			name: 'Biscotti',
			value: '#E3C565'
		},
		{
			name: 'Parmesan',
			value: '#FDE992'
		},
		{
			name: 'Hazelnut',
			value: '#BDA55D'
		}],
		[{
			name: 'Sandcastle',
			value: '#DAC27C'
		},
		{
			name: 'Buttermilk',
			value: '#FDEFB2'
		},
		{
			name: 'Sand dollar',
			value: '#ECE8B9'
		},
		{
			name: 'Shortbread',
			value: '#FBE790'
		}]
	];

	$scope.rows = $scope.white;
});