/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/cordova-ionic/cordova-ionic.d.ts" />
/// <reference path="../../typings/cordova/cordova.d.ts" />
/// <reference path="./controller/profileCtrl.ts" />
/// <reference path="./controller/loginCtrl.ts" />
/// <reference path="./service/profileService.ts" />
/// <reference path="./service/loginService.ts" />


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            /*  missing tsd
             if (window.StatusBar) {
             StatusBar.styleDefault();
             }
             */
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })

            .state('app.login', {
                url: "/login",
                views: {
                    'menuContent': {
                        templateUrl: "templates/login.html"
                    }
                }
            })

            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile.html"
                    }
                }
            })

            .state('app.groups', {
                url: "/groups",
                views: {
                    'menuContent': {
                        templateUrl: "templates/groups.html"
                    }
                }
            });
        $urlRouterProvider.otherwise('/app/login')
    })
    .controller(Controller.ProfileCtrl.controllerId, Controller.ProfileCtrl)
    .controller(Controller.LoginCtrl.controllerId, Controller.LoginCtrl)
    .service(Service.ProfileService.serviceId, Service.ProfileService)
    .service(Service.LoginService.serviceId, Service.LoginService);


