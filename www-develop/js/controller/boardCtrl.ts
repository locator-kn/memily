module Controller {
    export class BoardCtrl {

        _ID:number;
        name:string;
        posts;

        constructor(private $scope, private BoardService, private $stateParams) {
            this._ID = this.$stateParams.groupID;
            this.groupPosts();
            console.info(this._ID);
        }

        groupInfo() {

        }

        groupPosts() {
            this.BoardService.posts(this._ID).then(result => {
                this.posts = result;
                console.info(this.posts);
            });
        }


        static controllerId:string = "BoardCtrl";
    }
}
