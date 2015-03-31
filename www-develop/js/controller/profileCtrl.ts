module Controller {
    export class ProfileCtrl {
        result:string;
        _id:number;
        picture:string;
        name:string;
        surname:string;
        mail:string;
        major:string;
        semester:number;
        subscribed_groups:number[];

        constructor(private $scope, private ProfileService) {
            this.getData();
        }

        getData() {
            this.ProfileService.getProfileData().then(profileData => {
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

        static controllerId:string = "ProfileCtrl";
    }
}
