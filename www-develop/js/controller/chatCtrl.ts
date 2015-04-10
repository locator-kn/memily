module Controller {
    export class ChatCtrl {

        _ID:number;

        constructor(private $scope, private $stateParams) {
            this._ID = this.$stateParams.groupID;
        }

        static controllerId:string = "ChatCtrl";
    }
}
