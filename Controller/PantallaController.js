/**
 * Created by mishe on 22/4/2017.
 */
angular.module('app',[])
    .controller("controllerImagenes",function($scope,$window) {
        var mostarEditar= false;
        var correctSave=false;
        var  border= 'border-radius';
        $scope.options;
        $scope.colorRosado='#de5fcf';
        $scope.colorVerde='#1adebd';
        $scope.colorCeleste='#2ea1de';
        $scope.colorNegro='#03090d';
        $scope.colorRojo='#de213f';
        $scope.colorAmarrillo='#deba1e';
        $scope.colorAzul='#170ede';
        $scope.cuadrado='width: 100px height: 100px';
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
        };
        $scope.miColor={
            backgroundColor:'#1adebd'
        };
        $scope.cambioForma=function (forma) {
            console.log(forma)
            if(forma=='ovalo') {

                $scope.miForma = document.getElementById("menuUno").style.width = "80px";
                $scope.miForma = document.getElementById("menuUno").style.height = "40px";
                $scope.miForma = document.getElementById("menuDos").style.width = "80px";
                $scope.miForma = document.getElementById("menuDos").style.height = "40px";
                $scope.miForma = document.getElementById("menuTres").style.width = "80px";
                $scope.miForma = document.getElementById("menuTres").style.height = "40px";
                $scope.miForma = document.getElementById("menuUno").style.borderRadius="50%";
                $scope.miForma = document.getElementById("menuDos").style.borderRadius="50%";
                $scope.miForma = document.getElementById("menuTres").style.borderRadius="50%";
                $scope.miForma=document.getElementById("menuUno").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuUno").style.oTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuDos").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuDos").style.oTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuTres").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuTres").style.oTransform="skew(0deg)"
            }
            if(forma=='circulo') {
                $scope.miForma = document.getElementById("menuUno").style.width = "70px";
                $scope.miForma = document.getElementById("menuUno").style.height = "70px";
                $scope.miForma = document.getElementById("menuDos").style.width = "70px";
                $scope.miForma = document.getElementById("menuDos").style.height = "70px";
                $scope.miForma = document.getElementById("menuTres").style.width = "70px";
                $scope.miForma = document.getElementById("menuTres").style.height = "70px";
                $scope.miForma = document.getElementById("menuUno").style.borderRadius="50%";
                $scope.miForma = document.getElementById("menuDos").style.borderRadius="50%";
                $scope.miForma = document.getElementById("menuTres").style.borderRadius="50%";
                $scope.miForma=document.getElementById("menuUno").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuUno").style.oTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuDos").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuDos").style.oTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuTres").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuTres").style.oTransform="skew(0deg)"
            }
            if(forma=='cuadrado') {
                $scope.miForma = document.getElementById("menuUno").style.width = "80px";
                $scope.miForma = document.getElementById("menuUno").style.height = "40px";
                $scope.miForma = document.getElementById("menuDos").style.width = "80px";
                $scope.miForma = document.getElementById("menuDos").style.height = "40px";
                $scope.miForma = document.getElementById("menuTres").style.width = "80px";
                $scope.miForma = document.getElementById("menuTres").style.height = "40px";
                $scope.miForma = document.getElementById("menuUno").style.borderRadius="0%";
                $scope.miForma = document.getElementById("menuDos").style.borderRadius="0%";
                $scope.miForma = document.getElementById("menuTres").style.borderRadius="0%";
                $scope.miForma=document.getElementById("menuUno").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuUno").style.oTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuDos").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuDos").style.oTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuTres").style.mozTransform="skew(0deg)"
                $scope.miForma=document.getElementById("menuTres").style.oTransform="skew(0deg)"
            }
            if(forma=='forma') {
                $scope.miForma = document.getElementById("menuUno").style.width = "75px";
                $scope.miForma = document.getElementById("menuUno").style.height = "30px";
                $scope.miForma = document.getElementById("menuDos").style.width = "75px";
                $scope.miForma = document.getElementById("menuDos").style.height = "30px";
                $scope.miForma = document.getElementById("menuTres").style.width = "75px";
                $scope.miForma = document.getElementById("menuTres").style.height = "30px";
                $scope.miForma=document.getElementById("menuUno").style.webkitTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuUno").style.mozTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuUno").style.oTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuDos").style.webkitTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuDos").style.mozTransform="skew(40deg)";
                $scope.miForma=document.getElementById("menuDos").style.oTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuTres").style.webkitTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuTres").style.mozTransform="skew(20deg)";
                $scope.miForma=document.getElementById("menuTres").style.oTransform="skew(20deg)";
                $scope.miForma = document.getElementById("menuUno").style.borderRadius="0%";
                $scope.miForma = document.getElementById("menuDos").style.borderRadius="0%";
                $scope.miForma = document.getElementById("menuTres").style.borderRadius="0%";

            }

            // -webkit-transform: skew(20deg);
            // -moz-transform: skew(20deg);
            // -o-transform: skew(20deg);
            //

        };
        $scope.miForma={
            width: '90px',
            height: '90px',
            border: '3px solid #555'
        }
        // $scope.material-button-toggle={
        //  width: 90px;
        //  height: 90,px;
        //  margin: 0,auto;
        //  }
    });
