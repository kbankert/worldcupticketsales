function ticketsCtrl ($scope) {
	$scope.tickets = [
		{price: "250", home: "Chile", away: "Australia", purchased: false},
		{price: "205", home: "Brazil", away: "Croatia", purchased: false},
		{price: "450", home: "Ghana", away: "USA", purchased: false},
		{price: "200", home: "Argentina", away: "Iran", purchased: false},
		{price: "350", home: "Spain", away: "Netherlands", purchased: false}
	];

	$scope.addNewTicket = function () {
		$scope.tickets.push({price: $scope.newPrice, home: $scope.newHome, away: $scope.newAway, purchased: false})
		$scope.newPrice = "";
		$scope.newHome = "";
		$scope.newAway = "";
	};

	$scope.purchased = function() {
		var purchtickets = $scope.tickets;
		$scope.tickets = [];
		angular.forEach(purchtickets, function(ticket) {
			if (!ticket.purchased) $scope.tickets.push(ticket);
		});
	};
}