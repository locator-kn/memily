module Controller {
    export class LoginCtrl {

        constructor(private $scope, private $state, private LoginService, private $ionicHistory) {

        }

        submit() {

            /*
             this is necessary to prevent the ui router from popping up a new view
             with back button to previous view
             */
            this.$ionicHistory.nextViewOptions({
                disableBack: true
            });

            this.$state.go('app.dashboard');
        }

        showSignupView() {
            this.$ionicHistory.nextViewOptions({
                disableBack: true
            });
            this.$state.go('app.signup');
        }

        static controllerId:string = "LoginCtrl";
    }
}
