app.controller("myctrl",mycontroller);
function mycontroller($scope,myfactory){
   $scope.compute=function(){
              console.log("compute Start...");
              $scope.hra = myfactory.computeHRA($scope.sal);
              /*var hra = $scope.hra;*/
              $scope.da = myfactory.computeDA($scope.sal);
                /*var da =$scope.da;*/
              $scope.ta = myfactory.computeTA($scope.sal);
                /*var ta = $scope.ta;*/
              $scope.pf = myfactory.computePF($scope.sal);
                /*var pf = $scope.pf;*/
              $scope.gs = myfactory.computeGS($scope.sal,$scope.hra,$scope.da,$scope.ta);
       
              $scope.ns = myfactory.computeNetSalary($scope.sal,$scope.hra, $scope.da, $scope.ta, $scope.pf);     
                $scope.grade = myfactory.computeGrade($scope.sal);
              /*$scope.grade.color = myfactory.computeGrade($scope.sal);*/
          }
}