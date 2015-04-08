
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-translate/angular-translate.d.ts" />
/// <reference path="../../typings/cordova-ionic/cordova-ionic.d.ts" />
/// <reference path="../../typings/cordova/cordova.d.ts" />
/// <reference path="./controller/profileCtrl.ts" />
/// <reference path="./controller/loginCtrl.ts" />
/// <reference path="./controller/dashboardCtrl.ts" />

/// <reference path="./service/profileService.ts" />
/// <reference path="./service/loginService.ts" />
/// <reference path="./service/dashboardService.ts" />

/// <reference path="./controller/groupOverviewCtrl.ts" />
/// <reference path="./service/groupOverviewService.ts" />

/// <reference path="./controller/boardCtrl.ts" />
/// <reference path="./service/boardService.ts" />

/// <reference path="./controller/profileEditCtrl.ts" />


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic', 'pascalprecht.translate'])

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
    .constant('basePath', '/api/')
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

            .state('app.dashboard', {
                url: "/dashboard",
                views: {
                    'menuContent': {
                        templateUrl: "templates/dashboard.html"
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

            .state('app.profileEdit', {
                url: "/profileEdit",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profileEdit.html"
                    }
                }
            })

            .state('app.groupsOverview', {
                url: "/groupOverview",
                views: {
                    'menuContent': {
                        templateUrl: "templates/groupOverview.html"
                    }
                }
            })


            .state('app.board', {
                url: "/group/:groupID/board",
                views: {
                    'menuContent': {
                        templateUrl: "templates/board.html"
                    }
                }
            })

            .state('app.docs', {
                url: "/group/:groupID/docs",
                views: {
                    'menuContent': {
                        templateUrl: "templates/docs.html"
                    }
                }
            })

            .state('app.chats', {
                url: "/group/:groupID/chats",
                views: {
                    'menuContent': {
                        templateUrl: "templates/chats.html"
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/login')
    })
    .controller(Controller.ProfileCtrl.controllerId, Controller.ProfileCtrl)
    .controller(Controller.ProfileEditCtrl.controllerId, Controller.ProfileEditCtrl)
    .controller(Controller.LoginCtrl.controllerId, Controller.LoginCtrl)
    .controller(Controller.DashboardCtrl.controllerId, Controller.DashboardCtrl)
    .controller(Controller.GroupOverviewCtrl.controllerId, Controller.GroupOverviewCtrl)
    .controller(Controller.BoardCtrl.controllerId, Controller.BoardCtrl)

    .service(Service.ProfileService.serviceId, Service.ProfileService)
    .service(Service.LoginService.serviceId, Service.LoginService)
    .service(Service.DashboardService.serviceId, Service.DashboardService)
    .service(Service.GroupOverviewService.serviceId, Service.GroupOverviewService)
    .service(Service.BoardService.serviceId, Service.BoardService)

    .config(function ($translateProvider) {
        $translateProvider.translations('de', {
            NAV_DASHBOARD: 'Brett',
            NAV_PROFILE: 'Profile',
            NAV_GROUPS: 'Gruppen'
        });

        $translateProvider.translations('en', {
            NAV_DASHBOARD: 'Dashboard',
            NAV_PROFILE: 'Profile',
            NAV_GROUPS: 'Groups'
        });


        // Standardsprache
        $translateProvider.preferredLanguage('de');
    });


