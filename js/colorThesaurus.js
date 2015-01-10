var app = angular.module('app',[]);

app.service('colors', function($http) {
	var promise = $http.get('data/white.json').success(function(data){
		return data;
	});

	return promise;
});

app.controller('ColorCtrl', function($scope, colors) {
	$scope.colors = [
		{ name:'White', textColor:'#000000' },
		{ name:'Tan', textColor:'#000000' },
		{ name:'Yellow', textColor:'#000000' },
		{ name:'Orange', textColor:'#000000' },
		{ name: 'Red', textColor:'#000000' },
		{ name: 'Pink', textColor:'#000000' }
	];

	$scope.currentColor = $scope.colors[0];

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
		} else {
			$scope.rows = $scope.pink;
		}
	};

	colors.then(function(data) {
		$scope.white = data;
		//$scope.updateColors();
		$scope.rows = $scope.white;
	});

	/*$scope.white = [
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
	];*/

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

	$scope.yellow = [
		[{
			name: 'Yellow',
			value: '#FDE64B'
		},
		{
			name: 'Canary',
			value: '#F9C802'
		},
		{
			name: 'Gold',
			value: '#F9A602'
		},
		{
			name: 'Daffodil',
			value: '#FDEE87'
		}],
		[{
			name: 'Flaxen',
			value: '#D6B75A'
		},
		{
			name: 'Butter',
			value: '#FEE227'
		},
		{
			name: 'Lemon',
			value: '#EFFD5F'
		},
		{
			name: 'Mustard',
			value: '#E8B828'
		}],
		[{
			name: 'Corn',
			value: '#E4CD05'
		},
		{
			name: 'Medallion',
			value: '#E3B104'
		},
		{
			name: 'Dandelion',
			value: '#FDCE2A'
		},
		{
			name: 'Fire',
			value: '#FDA50F'
		}],
		[{
			name: 'Bumblebee',
			value: '#FCE205'
		},
		{
			name: 'Banana',
			value: '#FCF4A3'
		},
		{
			name: 'Butterscotch',
			value: '#FABD02'
		},
		{
			name: 'Dijon',
			value: '#C29200'
		}],
		[{
			name: 'Honey',
			value: '#FFC30B'
		},
		{
			name: 'Blonde',
			value: '#FEEB75'
		},
		{
			name: 'Pineapple',
			value: '#FEE227'
		},
		{
			name: 'Tuscan sun',
			value: '#FCD12A'
		}]
	];

	$scope.orange = [
		[{
			name: 'Orange',
			value: '#ED7014'
		},
		{
			name: 'Tangerine',
			value: '#F98228'
		},
		{
			name: 'Marigold',
			value: '#FDAE1D'
		},
		{
			name: 'Cider',
			value: '#B56727'
		}],
		[{
			name: 'Rust',
			value: '#8C4004'
		},
		{
			name: 'Ginger',
			value: '#BC5602'
		},
		{
			name: 'Tiger',
			value: '#FC6B02'
		},
		{
			name: 'Fire',
			value: '#DD561C'
		}],
		[{
			name: 'Bronze',
			value: '#B2560D'
		},
		{
			name: 'Cantaloupe',
			value: '#FCA172'
		},
		{
			name: 'Apricot',
			value: '#ED820E'
		},
		{
			name: 'Clay',
			value: '#7F400B'
		}],
		[{
			name: 'Honey',
			value: '#EC9706'
		},
		{
			name: 'Carrot',
			value: '#ED7117'
		},
		{
			name: 'Squash',
			value: '#C95C0A'
		},
		{
			name: 'Spice',
			value: '#7A3903'
		}],
		[{
			name: 'Marmalade',
			value: '#D16002'
		},
		{
			name: 'Amber',
			value: '#893101'
		},
		{
			name: 'Sandstone',
			value: '#D67129'
		},
		{
			name: 'Yam',
			value: '#CC5801'
		}]
	];

	$scope.red = [
		[{
			name: 'Red',
			value: '#D0312D'
		},
		{
			name: 'Cherry',
			value: '#990F02'
		},
		{
			name: 'Rose',
			value: '#E2252B'
		},
		{
			name: 'Jam',
			value: '#600F0B'
		}],
		[{
			name: 'Merlot',
			value: '#541F1B'
		},
		{
			name: 'Garnet',
			value: '#600B04'
		},
		{
			name: 'Crimson',
			value: '#B80F0A'
		},
		{
			name: 'Ruby',
			value: '#900603'
		}],
		[{
			name: 'Scarlet',
			value: '#910D09'
		},
		{
			name: 'Wine',
			value: '#4C0805'
		},
		{
			name: 'Brick',
			value: '#7E2811'
		},
		{
			name: 'Apple',
			value: '#A91B0D'
		}],
		[{
			name: 'Mahogany',
			value: '#420D09'
		},
		{
			name: 'Blood',
			value: '#710C04'
		},
		{
			name: 'Sangria',
			value: '#5E1914'
		},
		{
			name: 'Berry',
			value: '#791812'
		}],
		[{
			name: 'Currant',
			value: '#670C07'
		},
		{
			name: 'Blush',
			value: '#BC5449'
		},
		{
			name: 'Candy',
			value: '#D21502'
		},
		{
			name: 'Lipstick',
			value: '#9C1003'
		}]
	];

	$scope.pink = [
		[{
			name: 'Pink',
			value: '#F69ACD'
		},
		{
			name: 'Rose',
			value: '#FC94AD'
		},
		{
			name: 'Fushcia',
			value: '#FC46AA'
		},
		{
			name: 'Punch',
			value: '#F15278'
		}],
		[{
			name: 'Blush',
			value: '#FEC5E5'
		},
		{
			name: 'Watermelon',
			value: '#FE7F9C'
		},
		{
			name: 'Flamingo',
			value: '#FDA4B8'
		},
		{
			name: 'Rouge',
			value: '#F26B8B'
		}],
		[{
			name: 'Salmon',
			value: '#FDAB9F'
		},
		{
			name: 'Coral',
			value: '#FE7D68'
		},
		{
			name: 'Peach',
			value: '#FB9483'
		},
		{
			name: 'Strawberry',
			value: '#FC4C4E'
		}],
		[{
			name: 'Rosewood',
			value: '#A04242'
		},
		{
			name: 'Lemonade',
			value: '#FBBBCB'
		},
		{
			name: 'Taffy',
			value: '#FA86C5'
		},
		{
			name: 'Bubblegum',
			value: '#FD5CA8'
		}],
		[{
			name: 'Ballet slipper',
			value: '#F69ABF'
		},
		{
			name: 'Crepe',
			value: '#F2B8C6'
		},
		{
			name: 'Magenta',
			value: '#E11584'
		},
		{
			name: 'Hot pink',
			value: '#FF1695'
		}]
	];
});
