/**
 * Created by mishe on 22/4/2017.
 */
angular.module('app',[])
    .controller("controllerImagenes",function($scope,$window) {
        var mostarEditar= false;
        var correctSave=false;
        var  border= 'border-radius';
        $scope.option1;
        $scope.colorRosado='#de5fcf';
        $scope.colorVerde='#1adebd';
        $scope.colorCeleste='#2ea1de';
        $scope.colorNegro='#03090d';
        $scope.colorRojo='#de213f';
        $scope.colorAmarrillo='#deba1e';
        $scope.colorAzul='#170ede';
        $scope.cuadrado;
        $scope.circulo;
        $scope.rectangulo;
        $scope.ovalo;
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
        $scope.cambioForma=function (forma) {
            console.log(forma)
            $scope.cuadrado.border='2px'
        }

        $scope.cuadrado={
            border: '0px'

    }

       // $scope.material-button-toggle={
       //  width: 90px;
       //  height: 90,px;
       //  margin: 0,auto;
       //  }
    });
