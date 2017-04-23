/**
 * Created by mishe on 22/4/2017.
 */
angular.module('app',[])
    .controller("controllerImagenes",function($scope,$window) {
        var mostarEditar= false;
        var correctSave=false;
        $scope.option1;
        $scope.colorRosado='#de5fcf';
        $scope.colorVerde='#1adebd';
        $scope.colorCeleste='#2ea1de';
        $scope.colorNegro='#03090d';
        $scope.colorRojo='#de213f';
        $scope.colorAmarrillo='#deba1e';
        $scope.colorAzul='#170ede';

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
        $scope.cambioColor=function (color) {
            console.log(color);
            $scope.miColor. backgroundColor=color;
        }
        $scope.miColor={
            backgroundColor:'#1adebd'
        }
    });
