module Controller {
    export class ProfileEditCtrl {

        mail:string;

        constructor(private $scope, private $state) {

        }

        cancelEdit() {
            this.$state.go('app.profile');
        }

        saveEdit() {
            this.$state.go('app.profile');
        }

        static controllerId:string = "ProfileEditCtrl";
    }
}
