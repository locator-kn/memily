module Controller {
    export class DocumentCtrl {

        _ID:number;

        constructor(private $scope, private $stateParams) {
            this._ID = this.$stateParams.groupID;
        }


        static controllerId:string = "DocumentCtrl";
    }
}
