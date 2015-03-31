module Controller {
    export class ProfileCtrl {
        result: string;

        constructor(private $scope, private ProfileService) {
            this.getData()
        }
        getData() {
          this.ProfileService.getProfileData().then(profileData => {
            this.result = profileData.name;
          });
        }

        static controllerId: string = "ProfileCtrl";
    }
}
