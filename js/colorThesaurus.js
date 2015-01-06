var app = angular.module('app',[]);

app.controller('ColorCtrl', function($scope) {
	$scope.rows = [
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
});