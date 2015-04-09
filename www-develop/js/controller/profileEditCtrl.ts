module Controller {
    export class ProfileEditCtrl {

        result:string;
        _id:number;
        picture:string;
        name:string;
        surname:string;
        mail:string;
        major:string;
        semester:number;
        subscribed_groups:number[];


        constructor(private $scope, private $state, private ProfileService) {
            this.myProfile();
        }

        myProfile() {
            this.ProfileService.myProfile().then(profileData => {
                this._id = profileData._id;
                this.picture = profileData.picture;
                this.name = profileData.name;
                this.surname = profileData.surname;
                this.mail = profileData.mail;
                this.major = profileData.major;
                this.semester = profileData.semester;
                this.subscribed_groups = profileData.subscribed_groups;
            });
        }

        editPicture() {

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
