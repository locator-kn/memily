module Controller {
    export class LoginCtrl {

        constructor(private $scope, private $state, private LoginService, private $ionicViewService) {

        }

        submit() {

            /*
             this is necessary to prevent the ui router from popping up a new view
             with back button to previous view
             */
            this.$ionicViewService.nextViewOptions({
                disableBack: true
            });

            this.$state.go('app.dashboard');
        }

        showSignupView() {
            this.$ionicViewService.nextViewOptions({
                disableBack: true
            });
            this.$state.go('app.signup');
        }

        static controllerId:string = "LoginCtrl";
    }
}
