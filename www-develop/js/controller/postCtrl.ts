module Controller {
    export class PostCtrl {
        _ID:number;
        group_post;

        constructor(private $scope, private PostService, private $stateParams) {
            this._ID = this.$stateParams.postID;
            this.post();
        }

        post() {
            this.PostService.post(this._ID).then(result => {
                this.group_post = result;
            });
        }
        static controllerId:string="PostCtrl";
    }
}
