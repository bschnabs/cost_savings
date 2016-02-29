var ResultsController = function($scope)
{
    $scope.resultsForm =
    {
        cutDiameterComp: 2, cutDiameterJIS: 3,
        annualProdComp: 500, annualProdJIS: 750,
        machBurdenComp: 75, machBurdenJIS: 75,
        lengthOfCutComp: 48, lengthOfCutJIS: 48,
        feedrateComp: 30, feedrateJIS: 40,
        //cutTimeComp: 0, cutTimeJIS: 0,
        toolLifeComp: 20, toolLifeJIS: 45,
        toolChgFreqComp: 20, toolChgFreqJIS: 30,
        //toolChgYearComp: 0, toolChgYearJIS: 0,
        toolChgTimeComp: 3, toolChgTimeJIS: 3
        //toolChgTimeYrComp: 0, toolChgTimeYrJIS: 0,
        //toolChgCostYrComp: 0, toolChgCostYrJIS: 0,
        //machCostYrComp: 0, machCostYrJIS: 0,
        //totalMachCostPieceComp: 0, totalMachCostPieceJIS: 0
    };

    $scope.calcCutTime = function (resultsForm) {
        resultsForm.cutTimeComp = resultsForm.lengthOfCutComp / resultsForm.feedrateComp;
        resultsForm.cutTimeJIS = resultsForm.lengthOfCutJIS / resultsForm.feedrateJIS;
    };

    $scope.calcChangePerYear = function (resultsForm) {
        resultsForm.toolChgYearComp = resultsForm.annualProdComp / resultsForm.toolChgFreqComp;
        resultsForm.toolChgYearJIS = resultsForm.annualProdJIS / resultsForm.toolChgFreqJIS;
    }

    $scope.calcToolChangeTimeYear = function (resultsForm) {
        resultsForm.toolChgTimeYrComp = resultsForm.toolChgYearComp * resultsForm.toolChgTimeComp;
        resultsForm.toolChgTimeYrJIS = resultsForm.toolChgYearJIS * resultsForm.toolChgTimeJIS;
    }

    $scope.calcToolChangeCostYear = function (resultsForm) {
        resultsForm.toolChgCostYrComp = (resultsForm.toolChgTimeYrComp / 60) * resultsForm.machBurdenComp;
        resultsForm.toolChgCostYrJIS = (resultsForm.toolChgTimeYrJIS / 60) * resultsForm.machBurdenJIS;
    }

    $scope.calcMachCostYear = function (resultsForm) {
        resultsForm.machCostYrComp = ((resultsForm.annualProdComp * resultsForm.cutTimeComp) / 60) * resultsForm.machBurdenComp;
        resultsForm.machCostYrJIS = ((resultsForm.annualProdJIS * resultsForm.cutTimeJIS) / 60) * resultsForm.machBurdenJIS;
    }

    $scope.calcTotalMachCost = function (resultsForm) {
        resultsForm.totalMachCostPieceComp = (resultsForm.toolChgCostYrComp + resultsForm.machCostYrComp) / resultsForm.annualProdComp;
        resultsForm.totalMachCostPieceJIS = (resultsForm.toolChgCostYrJIS + resultsForm.machCostYrJIS) / resultsForm.annualProdJIS;
    }

    $scope.calcAll = function (resultsFormAll) {
        $scope.calcChangePerYear(resultsFormAll);
        $scope.calcCutTime(resultsFormAll);
        $scope.calcToolChangeTimeYear(resultsFormAll);
        $scope.calcToolChangeCostYear(resultsFormAll);
        $scope.calcMachCostYear(resultsFormAll);
        $scope.calcTotalMachCost(resultsFormAll);
    }
}

ResultsController.$inject = ['$scope'];