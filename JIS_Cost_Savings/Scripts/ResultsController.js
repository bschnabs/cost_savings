var ResultsController = function($scope)
{
    $scope.resultsForm =
    {
        cutDiameterComp: 2,
        cutDiameterJIS: 3,
        annualProdComp: 500,
        annualProdJIS: 750,
        lengthOfCutComp: 48,
        lengthOfCutJIS: 48,
        feedrateComp: 30,
        feedrateJIS: 40,
        cutTimeComp: 0,
        cutTimeJIS: 0
    };

    $scope.calcCutTime = function (resultsForm) {
        resultsForm.cutTimeJIS = resultsForm.lengthOfCutJIS * resultsForm.feedrateJIS;
    };
}

ResultsController.$inject = ['$scope'];