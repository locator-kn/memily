module Controller {
    export class GroupCtrl {

        _ID:number;
        name:string;
        posts;

        constructor(private $scope, private GroupService, private $stateParams) {
            this._ID = this.$stateParams.groupID;
            this.groupPosts();
            console.info(this._ID);
        }

        groupInfo() {

        }

        groupPosts() {
            this.GroupService.posts().then(result => {
                this.posts = result;
                console.info(this.posts);
            });
        }


        static controllerId:string = "GroupCtrl";
    }
}
