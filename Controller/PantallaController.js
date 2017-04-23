/**
 * Created by mishe on 22/4/2017.
 */
angular.module('app',[])
    .controller("controllerImagenes",function($scope,$window) {
        var mostarEditar= false;
        var correctSave=false;
        $scope.showOpciones=function(show) {
            console.log(show);
            $scope.mostarEditar=show;
            //if(!show) = if(show==false)--- if(show)= if(show==true)
            if(!show){
                $scope.showMessages(true);
            }
        };
        $scope.ready=function () {
            $('.material-button-toggle').on("click", function () {
                $(this).toggleClass('open');
                $('.option').toggleClass('scale-on');
            });
        };
        $scope.showMessages=function(show) {
            console.log(show);
            $scope.correctSave=show;
        };
    });